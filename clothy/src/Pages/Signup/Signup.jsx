import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  InputRightElement,
  Stack,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Button,
  Link,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addUserData } from "../../Redux/AuthReducer/action";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import style from '../OtherPages/style.module.css'
const initialState = {
  name: "",
  email: "",
  password: "",
  mobile: "",
  gender: "",
  isAuth:false,
  productQuantity:1,
  cart:[],
  wishlist:[],
  placedOrder:[]
};

const Signup=()=> {
  const [userData, setUserData] = useState(initialState);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const signupSuccess = () => {
    toast({
      title: "SignUp Successful.",
      description: "Thank You!!Login Now",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const emailExist = () => {
    toast({
      title: "Email address Already Exist.",
      description: "Please Enter New Email address.",
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
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const postdata = async (e) => {
    e.preventDefault();
    setUserData(initialState);
    try {
      let res = await fetch("http://localhost:8080/UserDetails");

      // console.log(res);
      
      let data = await res.json();
      // console.log(data);
      var mailAuth = false;
      for (let i in data) {
        if (data[i].email === userData.email) {
          mailAuth = true;
          // userData.isAuth=true;
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
    } else {
      fillRequiredData();
    }
  };

  return (
      <Flex
        // border={"1px solid "}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack 
        //border={"1px solid red"} 
        spacing={5} mx={"auto"} w={"1000px"} maxW={"lg"} py={8} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              {/* <HStack>
              <Box> */}
              <FormControl id="firstName" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={userData.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
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
                  value={userData.gender}
                  onChange={(e) => handleChange(e)}
                  name="gender"
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </FormControl>

              <FormControl id="phone" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="number"
                  value={userData.mobile}
                  onChange={(e) => handleChange(e)}
                  name="mobile"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userData.password}
                    onChange={(e) => handleChange(e)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl id="re-password" isRequired>
                <FormLabel>Re-Enter Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => handleChange(e)}
                  name="password"
                  value={userData.password}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={postdata}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <NavLink className={style.links} style={{color:'dodgerblue'}} to="/signin">
                    Sign In
                  </NavLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
  );
}

export default Signup;
