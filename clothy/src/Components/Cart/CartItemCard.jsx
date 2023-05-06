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
        <div className={style.ImageButton}>
            <img src={image} alt={title} />
            <Button  onClick={IncreaseQuantity}>+</Button>
            <Button disabled  style={{background:'#fff',border:'1px solid',padding:'0 2vw'}}>{quantity}</Button>
            <Button disabled={quantity===1} onClick={DecreaseQuantity}>-</Button>
        </div>
        <div className={style.product_details}>
            <h2>{title}</h2>
            <div className={style.details}>
            <span>{category}</span>
            <span>{color}</span>
            <span>{size}</span>
            <span>{lable}</span>
            </div>
            <p>{discount}%</p>
        </div>
        <div className={style.product_details}>
            <h1> 💲{price}</h1>
        </div>
        <div className={style.product_button}>
            <Button>Delete</Button>
        </div>
    </Box>
  )
}

export default CartItemCard