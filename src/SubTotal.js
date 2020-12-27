import React ,{useState}from 'react'
import "./SubTotal.css"
import {useHistory} from 'react-router-dom';
import CurrencyFormat from "react-currency-format"
import {useStateProvider} from './StateProvider';
import {getBasketTotalPrice } from './reducer';
function SubTotal() {
    const history = useHistory();
    const [{basket},dispatch] = useStateProvider();
    let total_price = 0
    basket.map(item=>{ 
       total_price += item.price; 
    })
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText = {(value)=>
                {
                    return(
                <>
                    <p>
                    Subtotal ({basket.length} items): <strong>{value} </strong>
                     </p>   
                     <small className="subtotal__gift">
                         <input type="checkbox"/> This order contains a gift
                         
                     </small>    
                </>)
            }}
            decimalScale={2}
value={getBasketTotalPrice(basket)}
displayType= {'text'}
thousandSeperator={true}
prefix={"$"}            
            />
            <button onClick={(e)=>{
                history.push('/payment')
            }}>Proceed to Checkout </button> 
        </div>
    )
}

export default SubTotal
