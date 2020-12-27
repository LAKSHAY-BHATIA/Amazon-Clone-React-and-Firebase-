import React from 'react'
import './CheckedoutProduct.css';
import {useStateProvider} from './StateProvider';
function CheckedoutProduct({image,id,title,price,rating,hidden}) {
    const [{},dispatch] = useStateProvider()
    return (
        <div className="checkedoutProduct">
            <img src={image}
            className="checkedoutProduct__image"
            alt="image"/>
            <div className="checkoutProduct__info">
    <p className="checkedoutProduct__title">{title}</p>
    <p className="checkedouteProduct__price"> 
    <small>$</small>
   <strong> {price} </strong>
     </p>
     <div className="checkedoutProduct__rating">
         {
             Array(rating)
             .fill()
             .map((_,i)=>{
                    return (<p>⭐</p>)
             })
         }
     </div>
     {!hidden && (  <button 
     onClick={(e)=>{
         dispatch({type:'REMOVE_FROM_BASKET',id:id})
     }}
     className="checkedoutProduct__button"> Remove from Basket </button>
)}
   
            </div>    
        </div>
    )
}

export default CheckedoutProduct
