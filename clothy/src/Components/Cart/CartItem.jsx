import React from 'react'
import CartItemCard from './CartItemCard'

function CartItem() {
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
    <div>
        {data.map(item=>{
        return  <CartItemCard {...item}/>
        })}
    </div>
  )
}

export default CartItem