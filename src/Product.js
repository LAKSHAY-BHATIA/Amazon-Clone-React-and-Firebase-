import React from 'react'
import {useStateProvider} from './StateProvider';
import './Product.css'
function Product({title,rating,image,price,id}) {
    const [{},dispatch] = useStateProvider();
    const addToBasket=()=>{
   //dispatch some action
   dispatch({
       type: 'ADD_TO_BASKET' ,
       item: {
           id,
           title,
           image,
           price,
           rating
       }
   })
    }
    return (
        <div className="product">
            <div className="product__info">
    <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>{
                        return <p>⭐</p>
                    })
                    }
                

                 </div>   
            </div>
            {/* "https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg" */}
            <img src={image} alt="product"/>
        <button onClick={()=>{
            addToBasket();
        }}>Add to Basket</button>
        </div>

    )
}

export default Product
