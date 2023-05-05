import React from 'react'
import CartItemCard from './CartItemCard'
import { Box } from '@chakra-ui/react'
import style from './Cart.module.css'
import { useSelector } from 'react-redux'

function CartItem() {
  const total = useSelector(store=>store.CartReducer.CartTotal);
  console.log(total)
    const data = [
        {"id": 1,
        "title": "Soho Heritage Harrington Jacket",
        "image": "https://assets.burberry.com/is/image/Burberryltd/93FB0DD4-CC1E-4F10-8A59-975E389BA547?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
        "price": 1890.00, 
        "price_c": 2490.00,
        "discount": 24,
        "size":"XL",
        "color":"Black",
        "label":"RELAXED FIT",
        "category":"Jacket"
      },
        {"id": 1,
        "title": "Soho Heritage Harrington Jacket",
        "image": "https://assets.burberry.com/is/image/Burberryltd/93FB0DD4-CC1E-4F10-8A59-975E389BA547?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
        "price": 1890.00, 
        "price_c": 2490.00,
        "discount": 24,
        "size":"XL",
        "color":"Black",
        "label":"RELAXED FIT",
        "category":"Jacket"
      }
    ]
  return (
    <Box style={{display:'flex'}}>
      <Box className="cardItem">
        {data.map(item=>{
          return  <CartItemCard key={item.id}{...item}/>
        })}
        </Box>
        <Box className={style.cart_total}>
          <h1 style={{color:'gray',fontWeight:'bold',fontSize:'1.1rem'}}>Price Details</h1>
          <hr />
          <h3>Price{} items     <span>{total}</span></h3>
        </Box>
    </Box>
  )
}

export default CartItem