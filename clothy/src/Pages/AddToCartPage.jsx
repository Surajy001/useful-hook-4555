import React from 'react'
import CartItem from '../Components/Cart/CartItem'
import CartTotal from '../Components/Cart/CartTotal'
import { Navbar } from '../Components/Navbar/Navbar'

function AddToCartPage() {
  return (
    <>
      <CartItem/>
      <CartTotal/>
    </>
  )
}

export default AddToCartPage;