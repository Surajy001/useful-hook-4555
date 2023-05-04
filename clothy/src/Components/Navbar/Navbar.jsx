import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const links =[
    {to:'/',text:'Home'},
    {to:'/cart-page',text:'Cart'},
  ] 
  return (
    <div>
      {links.map(item=>(
      <Link to={item.to}>{item.text}</Link>
      ))}
    </div>
  )
};
