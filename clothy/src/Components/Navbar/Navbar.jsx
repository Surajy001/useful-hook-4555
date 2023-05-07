import {
  Box,
  Flex,
  // Avatar,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  InputLeftElement,
  Button,
  InputGroup,
  Input,
  Tooltip,
  Text
} from "@chakra-ui/react";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { green } from "@mui/material/colors";
// import style from "./Navbar.module.css";
// import { LogoDev } from "@mui/icons-material";
import { FiSearch } from "react-icons/fi";
// import logo from "../../Assets/Clothy.png"
import { FaRegHeart } from 'react-icons/fa';
// import { color } from "framer-motion";



export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box 
      // bg={useColorModeValue("gray.100", "gray.900")} 
      // border={"1px solid gray.400"}
      p={3}
      bgColor={"white"}
      position="sticky" top={0} zIndex="1001"
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <HStack spacing={8} alignItems={"center"}> */}
            
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              alignItems={"center"}
            >
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Link href={"/"} textAlign={"center"}>
                <Box border={"1px solid red"}>
                 {/* <Image src={logo} alt="logo" width={"100px"} h={"50px"}  /> */}
                </Box>
              </Link>

              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/menproducts"}
              >
                Men
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                Women
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                Accessories
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                Winter
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                sale
              </Link>
            </HStack>
          {/* </HStack> */}
         
           <InputGroup w="auto" display={{ base: "none", md: "flex" }} >
                <InputLeftElement color="gray.500" cursor="pointer" _hover={{ color: "blue" }}>
                    <FiSearch />
                </InputLeftElement>
                <Input placeholder="Search..." border={"1px solid gray"}  />
            </InputGroup>
      
          {/* <Flex alignItems={"center"} justifyContent={"space-evenly"}> */}
          <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          alignItems={"center"}
          >
            <Button
            as={'a'}
            // display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            href={'/signin'}
            _hover={{
              bg: 'blue.300',
            }}>
            Sign In
          </Button>
           <Link href="#">
           <FaRegHeart />
           </Link>
            {/* <Link href="/add-to-cart"> */}
              {/* <ShoppingCartIcon
                sx={{
                  color: "dodgerblue",
                  fontSize: "38px",
                  "&:hover": { color: green[600], transform: "scale(1.1)" },
                  cursor: "pointer",
                  margin: "20px",
                }}
              /> */}
              {/* Cart */}

              <Link
                  // as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  // variant={"link"}
                  href="/add-to-cart"
                  color={"black"}
                  h={"40px"} alignItems={"center"}
                  display={"flex"}
                >
                  <Tooltip
                    label={`You have 0 items in the cart`}
                    fontSize="sm"
                    background="lightgrey"
                    color={"black"}
                    
                  >
                    <Box display={"flex"} alignItems={"center"}>
                    <Text fontSize={"17px"} >
                      Cart 
                      </Text>
                      <Text p={"8px"} w={"30px"} 
                       backgroundColor={"black"} 
                      color={"white"} marginLeft={"7px"} borderRadius={"50%"}><span style={{textAlign:"center"}}>0</span></Text>
                    
                    </Box>
                    
                  </Tooltip>
                </Link>

            {/* </Link> */}
            {/* <span className={style.cart_item_total}>{6}</span> */}

            {/* <Avatar
              size={"sm"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            /> */}
            </Stack>
          {/* </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"#"}
              >
                Men
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"#"}
              >
                Women
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"#"}
              >
                Accessories
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"#"}
              >
                Winter
              </Link>
              <Link
                to={""}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"#"}
              >
                sale
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
