
// import React, { useState } from 'react'
// import styled from 'styled-components'
// import {useDispatch} from 'react-redux'
// import { AdminLoginAction } from '../Redux/Admin/Login/action'

// const init = {
//     email:'',
//     password:''
// }

// const AdminLogin = () => {
//   const dispatch = useDispatch()
//     const [formState,setFormState] = useState(init)

//     const handleChange = (e)=> {
//        const {name,value} = e.target
//        let newObj ={
//         ...formState,
//         [name]:value,
//        }

//        setFormState(newObj)
//     }

//    const handleSubmit =(e)=> {
//     e.preventDefault()
//         dispatch(AdminLoginAction())
//    }

//   return (
//     <DIV>
//       <form onSubmit={handleSubmit} >
//         <input type="text"   placeholder='Enter Email Id' name='email' value={formState.email} onChange={handleChange} />
//         <input type="text" placeholder='Enter Password' name='password' value={formState.password} onChange={handleChange} />
//         <input type="submit" value="LOGIN"  />
//       </form>
//     </DIV>
//   )
// }

// export default AdminLogin
// const DIV = styled.div`

//         height: 500px;
//         border: 1px solid gray;
//         display: flex;
//         flex-direction:column;
//         justify-content: center;
//         box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

//     form{
//         width: 50%;
//         height: 350px;
//         border: 1px solid gray;
//         margin: 20px auto;
//         display: flex;
//         flex-direction:column;
//         align-items: center;

//         align-content:center;
//         justify-content:space-evenly;
//         padding: 20px;
//         box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;


//     }
//     input[type=text]{
//         width: 70%;
//         height: 40px;
//         border: 1px solid gray;
//         padding: 5px;
//         text-align: left;
//         border-radius:0px;

//     }
//     input[type=submit]{
//         width: 20%;
//         height: 40px;
//         border: 1px solid gray;
//         border-radius:0px;

//     }


// `

import { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginAction } from "../Redux/Admin/Login/action";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const init = {
  email: '',
  password: ''
}

const AdminLogin = () => {
  const navigate = useNavigate()

  const data = useSelector((store) => store.adminLoginReducer.admindata)
  // const isAuth=useSelector((store)=>store.adminLoginReducer.isAuth)

  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const [formState, setFormState] = useState(init)
  const toast = useToast();

  const ClickHandle = (e) => {

    const { name, value } = e.target;
    let newObj = {
      ...formState,
      [name]: value
    }
    setFormState(newObj)
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(adminLoginAction(formState))
  
      if (data?.email === formState.email && data?.password === formState.password) {
        navigate("/admin-dashboard")
        toast({
          title: "Login Success.",
          description: "Welcome to Clothy.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      } else {
        toast({
          title: "Login Failed.",
          description: "Wrong Credentails",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      }
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input name="email" type="email" placeholder="email address" onChange={ClickHandle} value={formState.email} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={ClickHandle}
                    name="password"
                    value={formState.password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      {/* <Box>
        New to us?{" "}
        <Link color="teal.500" href="#">
          Sign Up
        </Link>
      </Box> */}
    </Flex>
  );
};

export default AdminLogin;