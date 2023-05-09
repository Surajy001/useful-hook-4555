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

const Signin=()=> {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const {user}=useSelector((store)=>store.authReducer);

  const isAuth=useSelector((store)=>store.authReducer.isAuth);
  const location=useLocation();
  //console.log(location.state)


  const dispatch=useDispatch();

  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();

  //  console.log('auth',isAuth)

  const wrongEmail = () => {
    toast({
      title: "Wrong Email address or Password.",
      description: "Please enter right email address or password!!!",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

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

      let res = await axios("http://localhost:8080/UserDetails");
      let Mendata = res.data;
     let UserDetails =   Mendata.find((item)=>{
        return item.email=== email&& item.password===password        

      let res = await axios("http://localhost:8080/UserDetails").then((resdata)=>{
          //  console.log(data.data);
          let userFilterData=resdata?.data?.map((el)=>{
            if (el.email === email && el.password === password) {
                  
              console.log(el)
              dispatch(patchUserData(el,el.id))
              return el
            }
           })
           console.log(userFilterData)
          if(userFilterData.length ===0){
            wrongEmail();
          }else{
            loginSuccess();
            navigate(`${location.state}`);
          }

      })
      console.log(UserDetails)
      if(UserDetails&&UserDetails.email===email){
        if(UserDetails.password!=password){
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
            navigate(`${location.state?location.state:'/'}`);
          })
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
      // let Auth = false;
      // for (let i in data) {
      //   if (data[i].email === email && data[i].password === password) {
      //     // Auth = true;
      //     dispatch(patchUserData(data[i],data[i].id)).then(()=>{
      //     })
          // data[i].isAuth=true;

          // localStorage.setItem("name", data[i].name);
          // return
        // }
        // else{
        //   wrongEmail();
        // }
          //}

      // if (!isAuth) {
      //   wrongEmail();
      // } else {
      //   loginSuccess();
      //   navigate("/");
      // }

    } catch (error) {
      console.log(error);
    }
    setemail("");
    setPassword("");
    // window.location.reload();
  };

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
