import React from 'react'
import "./Checkout.css"
import SubTotal from './SubTotal';
import CheckedoutProduct from './CheckedoutProduct';
import {useStateProvider} from './StateProvider';
function Checkout() {
    const [{basket,user},dispatch] = useStateProvider();
    return (
        <div className="checkout">
            <div className="checkout__left">
   

                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1295817_1512524_IN_in_renewed_mobiles_text_revision_adapt_1216785_in_en_3590396_1500x300_en_IN.jpg" alt="ad" 
                className = "checkout__ad"
                />
                 <h3>Hello {user?.email}</h3>
                <div>
                    <h2> Your Shopping Basket</h2>
                    {/* CheckedoutProduct */}
                   {basket.map(item=>{
                       return(
<CheckedoutProduct title={item.title} 
                    image={item.image}
                    id={item.id}
                    rating={item.rating}
                    price={item.price}
                    />
                       )
                   })} 
                   
                   
                    </div>
            </div>
            <div classname="checkout__right">
              <SubTotal/>
                </div>
        </div>
    )
}

export default Checkout 
