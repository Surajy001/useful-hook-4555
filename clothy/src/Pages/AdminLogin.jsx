
import React, { useState } from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { AdminLoginAction } from '../Redux/Admin/Login/action'

const init = {
    email:'',
    password:''
}

const AdminLogin = () => {
  const dispatch = useDispatch()
    const [formState,setFormState] = useState(init)

    const handleChange = (e)=> {
       const {name,value} = e.target
       let newObj ={
        ...formState,
        [name]:value,
       }
       
       setFormState(newObj)
    }

   const handleSubmit =(e)=> {
    e.preventDefault()
        dispatch(AdminLoginAction())
   }
    
  return (
    <DIV>
      <form onSubmit={handleSubmit} >
        <input type="text"   placeholder='Enter Email Id' name='email' value={formState.email} onChange={handleChange} />
        <input type="text" placeholder='Enter Password' name='password' value={formState.password} onChange={handleChange} />
        <input type="submit" value="LOGIN"  />
      </form>
    </DIV>
  )
}

export default AdminLogin
const DIV = styled.div`
       
        height: 500px;
        border: 1px solid gray;
        display: flex;
        flex-direction:column;
        justify-content: center;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
     
    form{
        width: 50%;
        height: 350px;
        border: 1px solid gray;
        margin: 20px auto;
        display: flex;
        flex-direction:column;
        align-items: center;
       
        align-content:center;
        justify-content:space-evenly;
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
       

    }
    input[type=text]{
        width: 70%;
        height: 40px;
        border: 1px solid gray;
        padding: 5px;
        text-align: left;
        border-radius:0px;
        
    }
    input[type=submit]{
        width: 20%;
        height: 40px;
        border: 1px solid gray;
        border-radius:0px;
        
    }
    

`