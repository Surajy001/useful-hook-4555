import React, { useState } from 'react'

function CartItemCard({id,title,image,price,price_c,discount,size,color,lable,category}) {
    const [quantity,setQuantity] = useState(1);
    const IncreaseQuantity = ()=>{
        setQuantity(prev=>prev+1);
    }
    const DecreaseQuantity = ()=>{
        setQuantity(prev=>prev-1);
    }
  return (
    <div style={{display:"flex",justifyContent:'space-around',width:'50%'}}>
        <div className="ImageInputButton">
            <img src={image} alt={title} />
            <button  onClick={IncreaseQuantity}>+</button>
            <p>{quantity}</p>
            <button disabled={quantity===1} onClick={DecreaseQuantity}>-</button>
        </div>
        <div className="otherDetails">
            <h3>{title}</h3>
            <p>{category}</p>
            <span>{discount}</span>
            
        </div>
        <div className="DeliveryText">

        </div>
    </div>
  )
}

export default CartItemCard