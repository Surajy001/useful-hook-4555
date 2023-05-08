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
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { patchUserData } from "../../Redux/AuthReducer/action";
import axios from "axios";


const Signin=()=> {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const isAuth=useSelector((store)=>store.authReducer.isAuth);

  const dispatch=useDispatch();

  const navigate = useNavigate();
  const toast = useToast();

   console.log('auth',isAuth)
  // all toasts are here
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
            navigate("/");
          }
      })
      console.log(isAuth);
      // let data = await res.json();

      // console.log(data);

      // let Auth = false;
      // for (let i in data) {
      //   if (data[i].email === email && data[i].password === password) {
      //     // Auth = true;
      //     dispatch(patchUserData(data[i],data[i].id)).then(()=>{
      //       loginSuccess();
      //       navigate("/");
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
              If have no account? <Link color={'blue.400'} href="/signup">Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signin;
