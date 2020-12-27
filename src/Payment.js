import React,{useState,useEffect} from 'react'
import "./Payment.css";
import {useStateProvider} from './StateProvider'
import {Link,useHistory} from 'react-router-dom';
import CheckedoutProduct from './CheckedoutProduct';
import {CardElement,useStripe,useElements } from '@stripe/react-stripe-js'
import { getBasketTotalPrice } from './reducer';
import CurrencyFormat from 'react-currency-format';
import {db} from './firebase'
import axios from './axios'

function Payment() {

    const [{basket, user},dispatch] =useStateProvider();

 const stripe = useStripe();
 const elements = useElements();
  const history = useHistory();
 const [error,setError] = useState(null)
const [disabled,setDisable] = useState(true)
const [succeeded,setSucceeded] = useState(false);
const [processing,setProcessing] = useState("")
const [clientSecret,setClientSecret] = useState("");
useEffect(()=>{
    //generate special stripe secret which allows customer 
    //basket changes get a new secret 
    const getClientSecret = async ()=>{
        //stripe expect total in currency
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotalPrice(basket)*100}`
        })
        setClientSecret(response.data.clientSecret)
        console.log(response.data.clientSecret)
    }

    getClientSecret()
   
},[basket])

 console.log('client secret ', clientSecret)


const handleSubmit = async (e)=>{
    // do all the fancy stripe stuff
     e.preventDefault()
     setProcessing(true);
     const payload = await stripe.confirmCardPayment(clientSecret,{
         payment_method: {
             card: elements.getElement(CardElement)
         }
     }).then(({paymentIntent})=>{
       console.log('payment intent: ',paymentIntent)
       console.log('user:',user.uid )
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        })

            setSucceeded(true)
            setError(null)
            setProcessing(false)
           dispatch({type:'EMPTY_BASKET'})
            history.replace('/orders')
            
     } )
}

const handleChange = e=>{
      //listen for change in the cardElement 
      //display any error as the customer types card details
      setDisable(e.empty);
      setError(e.error?e.error.message:"");
    }
    
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>    
                {/* Payment Section - delvery address */}
                <div className = "payment__section">
                        <div className="payment__title">
                            <h3>payment address </h3>
                        </div>    
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>123 React Road</p>
                            <p>New Delhi,India </p>
                            
                        </div>
                </div>
                {/* Payment section - Review Items */}
                <div className = "payment__section">
                <div className="payment__title">
                    <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckedoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment Section - delevery address */}
                <div className = "payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            {/* stripe magic */}
                            <form onSubmit={(e)=>handleSubmit(e)}>
                                <CardElement
                                onChange = {(e)=>handleChange(e)}
                                />
                                <div className="payment__priceContainer">

                                    <CurrencyFormat
                                    renderText={(value)=>{return (
                                        <>
                                        <h3>Order Total : {value}</h3>
                                        </>
                                    )}}
                                    decimalScale={2}
                                    value={getBasketTotalPrice(basket)}
                                    displayType={"text"}
                                    prefix={'$'}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                    <span>{processing?<p>processing</p>:"Buy Now"}</span>
                                    </button>
                                </div>
                                {/* error */}
                                {error&&<div>{error}</div>}
                            </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
