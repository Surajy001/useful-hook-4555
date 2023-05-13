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
  useToast,
  Spinner
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AdminLoginPatch, adminLoginAction } from "../Redux/Admin/Login/action";
import { NavLink, useNavigate } from "react-router-dom";
import { URl } from "../Redux/WomensPageRedux/action";

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
  const [loadingButton,setLoadingButton] = useState(false);

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

  useEffect(()=>{
    dispatch(adminLoginAction);
  },[])
  const handleSubmit = (e) => {
    setLoadingButton(true);
    // console.log(loadingButton)
    e.preventDefault();
      let User = data?.find(admin=>admin.email===formState.email&&admin.password===formState.password);
      if (User) {
        dispatch(AdminLoginPatch(User));
        setTimeout(()=>{
          navigate("/admin-dashboard")
          toast({
            title: "Login Success.",
            description: "Welcome to Clothy.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          },100)
        },[])
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
      setLoadingButton(false)
    // try{
    // let data = axios.get(`${URl}/AdminDetail`).then((res)=>{
    //     console.log(res);
    //     res.data.find(item=>item.email===formState.email&&item.password===formState.password);
    //     // dispatch()
    //   })

    // }catch(err){

    // }
  
       }

  return loadingButton?<Stack direction='row' spacing={4} >
  <Spinner size='xl' />
</Stack>:(
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
                borderRadius={'.5rem'}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login 🔒
              </Button>
            </Stack>
          </form>
        </Box>
        <NavLink to="/" style={{color:'blueviolet',padding:'.7rem 1.3rem',background:"#6a1b9a",borderRadius:'10px',color:'white',fontWeight:'bold',fontSize:'1.1rem'}}>⬅ Back to Home 🏠</NavLink>
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