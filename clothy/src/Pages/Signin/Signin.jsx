import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Checkbox,
  Stack,
  Button,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { patchUserData } from "../../Redux/AuthReducer/action";
import axios from "axios";
import style from '../OtherPages/style.module.css'
import { URl } from "../../Redux/WomensPageRedux/action";

const Signin=()=> {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const location=useLocation();
  //console.log(location.state)
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  

  const loginSuccess = () => {
    toast({
      title: "Login Successful.",
      description: "Thank You For Login!!!",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const submitLogin = async () => {
    try {

      let res = await axios(`${URl}/UserDetails`);
      let Mendata = res.data;
     let UserDetails =   Mendata.find((item)=>{
        return item.email=== email&& item.password===password        
     })
      if(UserDetails&&UserDetails?.email===email){
        if(UserDetails?.password!==password){
          toast({
            title: "Login Failed.",
            description: "Wrong Password",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          })
        }else{
          loginSuccess();
          dispatch(patchUserData(UserDetails,UserDetails.id)).then(()=>{
          })
          navigate(`${location.state?location.state:'/'}`);
        }
      }else{
        toast({
          title: "Login Failed.",
          description: "Wrong Credentails",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      }
    
    } catch (error) {
      console.log(error);
    }
    setemail("");
    setPassword("");
    // window.location.reload();
  }


  return (
      <Flex
      minH={'70vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack 
      //border={"1px solid red"}
      w={"1000px"}
      spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in </Heading>
        </Stack>
        <Box
          // maxW={'lg'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" 
              value={email}
              onChange={(e) => setemail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={submitLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
              If have no account? <NavLink className={style.links} style={{color:'dodgerblue'}} to="/signup">
                    Sign Up
                  </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signin;
