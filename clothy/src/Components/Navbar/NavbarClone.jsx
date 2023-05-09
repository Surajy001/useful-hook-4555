import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarClone() {
    const links = [
        {to:'/',text:"home"},
        {to:'/menproducts',text:"Men"},
        {to:'/womenproducts',text:"Women"},
        {to:'#',text:"Accessories"},
        {to:'#',text:"Winter"},
        {to:'#',text:"Sale"},
    ]
  return (
    <div className=""></div>
    // <div>
    //         <NavLink to={"/"}
    //          className={style.logo}
    //          >
    //             <Text className={style.logo} 
    //             fontWeight={700} 
    //             fontSize={"30px"}>Clothy.  </Text>
    //           </NavLink>
    //     {links.map(item=>{
    //         return <NavLink to={item.to}>{item.text}</NavLink>
    //     })}
    // </div>
  )
}

export default NavbarClone