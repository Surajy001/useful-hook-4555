import React, { useState } from "react";
import styles from "./Signup.module.css";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {addUserData} from "../../Redux/AuthReducer/action";


import {
  Flex,
  Box,
  // FormControl,
  // FormLabel,
  // Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  // Button,
  // Heading,
  Text,
  useColorModeValue,
  // Link,
} from '@chakra-ui/react';
// import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


const initialState = {
  name: "",
  email: "",
  password: "",
  mobile: "",
  gender: "",
  profile:
    "https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u1.jpg",
};

function Signup() {
  const [userData, setUserData] = useState(initialState);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();
  const toast = useToast();

  const signupSuccess = () => {
    toast({
      title: "Signup Successful.",
      description: "Thank You!!Login Now",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const emailExist = () => {
    toast({
      title: "Email Already Exist.",
      description: "Please Enter New Email.",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const fillRequiredData = () => {
    toast({
      title: "Please fill required data",
      description: "Please Share required info",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const postdata = async (e) => {
    e.preventDefault();
    setUserData(initialState);
    // const payload = {...userData,price: Number(userData.price)}
    try {
      let res = await fetch("http://localhost:8080/login");
      let data = await res.json();
      console.log(data);
      var mailAuth = false;
      for (let i in data) {
        if (data[i].email === userData.email) {
          mailAuth = true;
          break;
        }
      }

      if (mailAuth === true) {
        emailExist();
        return;
      }
    } catch (error) {
      console.log(error);
    }

    if (
      !mailAuth &&
      userData.name &&
      userData.email &&
      userData.password &&
      userData.gender &&
      userData.mobile
    ) {
      dispatch(addUserData(userData, signupSuccess, navigate, emailExist));
    }else{
      fillRequiredData()
    }
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading textAlign="center" color="black">
          Sign Up
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Your user Name (6 characters only & Required*)"
            value={userData.name}
            maxLength={6}
            onChange={(e) => handleChange(e)}
            name="name"
            type="text"
          />
          <FormLabel>Gender</FormLabel>
          <Select
            placeholder="Select Your Gender (*Required)"
            value={userData.gender}
            onChange={(e) => handleChange(e)}
            name="gender"
          >
            <option value="Male">Male</option>
            <option value="female">Female</option>
          </Select>
          <FormLabel>Phone Number</FormLabel>
          <Input
            placeholder="Your Phone Number (*Required)"
            type="number"
            value={userData.mobile}
            onChange={(e) => handleChange(e)}
            name="mobile"
          />
          <FormLabel>Email address</FormLabel>
          <Input
            value={userData.email}
            onChange={(e) => handleChange(e)}
            type="email"
            placeholder="Your Email Address (*Required)"
            name="email"
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Your Password (*Required)"
            value={userData.password}
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
          />
          <FormLabel>Re-Enter Password</FormLabel>
          <Input
            placeholder="Re-Enter Your Password (*Required)"
            type="password"
            onChange={(e) => handleChange(e)}
            name="password"
            value={userData.password}
          />
          <FormHelperText>
            We'll never share your Email & Password.
          </FormHelperText>
          <FormHelperText>
            If have an account click{" "}
            <Link color="black" fontWeight={"600"} href="/signin">
              Sign in
            </Link>
          </FormHelperText>
          {/* {load ? (
            <Button
              isLoading
              w="10%"
              marginLeft="42%"
              marginTop="30px"
              color="white"
              background="rgb(45,45,47)"
              colorScheme="teal"
              variant="solid"
            >
              Email
            </Button>
          ) : ( */}
          <Button
            onClick={postdata}
            loadingText="Submitting"
            w="20%"
            marginLeft="42%"
            marginTop="30px"
            color="white"
            background="black"
            _hover={{
              bg: "gray",
            }}
          >
            <span className={styles.signupButton}>Sign up</span>
          </Button>
          {/* )} */}
        </FormControl>
      </div>



    

{/* export default function SignupCard() { */}

  {/* return ( */}
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {/* <HStack>
              <Box> */}
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              {/* </Box> */}
              {/* <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box> */}
            {/* </HStack> */}
            <FormControl id="gender" isRequired>
              <FormLabel>Gender</FormLabel>
              <Select
            // placeholder="Select Your Gender (*Required)"
            value={userData.gender}
            onChange={(e) => handleChange(e)}
            name="gender"
          >
            <option value="">option</option>
            <option value="Male">Male</option>
            <option value="female">Female</option>
          </Select>
            </FormControl>

            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input type="number" />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id="re-password" isRequired>
              <FormLabel>Re-Enter Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} href="/signin">Sign In</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  {/* ); */}
{/* } */}



    </div>
  );
}

export default Signup;
