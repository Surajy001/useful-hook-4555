import React from 'react'
import CartItemCard from './CartItemCard'
import { Box, Button } from '@chakra-ui/react'
import style from './Cart.module.css'
import { useSelector } from 'react-redux'
function CartItem() {
  const total = useSelector(store=>store.CartReducer.CartTotal);
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
        {"id": 2,
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
    <Box className={style.Cart_Main_Page}>
      <Box className={style.cart_item}>
        {data.map(item=>{
          return  <CartItemCard key={item.id}{...item}/>
        })}
        </Box>
        <Box className={style.cart_total}>
          <h1 style={{color:'gray',fontWeight:'bold',fontSize:'1.1rem'}}>Price Details</h1>
          <hr />
          <p>Price {data.length} items </p>            <span>{total}</span>
          <p>Discount</p>                              <span className={style.discountPrice} style={{color:"darkgreen"}}>-${Math.round(total*0.4)||120 } </span>
          <p>Delivery Charges </p>                     <span style={{color:"green"}}>Free</span>
          <p>Secured Packaging Charge </p>             <span>$148</span>
          <p className="totalAmount">Total Amount </p> <span>{total}</span>
          <p style={{color:'green',fontWeight:'bold'}}>You will save ${total - 120} on this order</p>
          <Button className={style.checkout} color={"#fff"} background={'dodgerblue'} w="50%">Checkout ➡</Button>
        </Box>
    </Box>
  )
}

export default CartItem