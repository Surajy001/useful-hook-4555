import React, { useState } from 'react'
import style from './Cart.module.css'
import { Box, Button } from '@chakra-ui/react';
function CartItemCard({id,title,image,price,price_c,discount,size,color,lable,category}) {
    const [quantity,setQuantity] = useState(1);
    const IncreaseQuantity = ()=>{
        setQuantity(prev=>prev+1);
    }
    const DecreaseQuantity = ()=>{
        setQuantity(prev=>prev-1);
    }
  return (
    <Box className={style.CartItemContainer}>
        <div className={style.ImageInputButton}>
            <img src={image} alt={title} />
            <Button  onClick={IncreaseQuantity}>+</Button>
            <span>{quantity}</span>
            <Button disabled={quantity===1} onClick={DecreaseQuantity}>-</Button>
        </div>
        <div className="otherDetails">
            <h2>{title}</h2>
            <p>{category}</p>
            <span>{discount}</span>
        </div>
        <div className="DeliveryText">
            <Button>Delete</Button>
        </div>
    </Box>
  )
}

export default CartItemCard