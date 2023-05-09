import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
  // Image,
  InputLeftElement,
  Button,
  InputGroup,
  Input,
  Tooltip,
  Text,
  useToast,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart, FaUser } from "react-icons/fa";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { ButtonLogout } from "./ButtonLogout";
import { useDispatch, useSelector } from "react-redux";

import { BiUser } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {  user } = useSelector((store) => store.authReducer);
  const {isAuth} = user;
  const toast = useToast();
  const logoutSuccess = () => {
    toast({
      title: "Logout Successful.",
      description: "You are Logged out now",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Box
        // bg={useColorModeValue("gray.100", "gray.900")}
        // border={"1px solid gray"}
        py={3}
        px={5}
        bgColor={"white"}
        position="sticky"
        top={0}
        zIndex="1001"
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
          <HStack
            w="40%"
            display={"flex"}
            justifyContent={"space-evenly"}
            spacing={{ base: 3, md: 1 }}
            alignItems={"center"}
          >
            <Box>
              <NavLink to={"/"}>
                <Text className={style.logo} fontWeight={700} fontSize={"30px"}>
                  Clothy.{" "}
                </Text>
              </NavLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={{ base: 3, md: 1 }}
              display={{ base: "none", md: "flex" }}
              alignItems={"center"}
              width="85%"
              justifyContent={"space-around"}
            >
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#7600dc" : "white",
                })}
                to={"/menproducts"}
                className={style.navLinks}
              >
                Men
              </NavLink>
              <NavLink
                to={"/womenproducts"}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#7600dc" : "#fff",
                })}
                className={style.navLinks}
              >
                Women
              </NavLink>
              <NavLink
                to={"/About"}
                className={style.navLinks}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#7600dc" : "#fff",
                })}
              >
                About
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#7600dc" : "#fff",
                })}
                className={style.navLinks}
                to={"/winter"}
              >
                Winter
              </NavLink>
              <NavLink
                to={"/sale"}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#7600dc" : "#fff",
                })}
                className={style.navLinks}
              >
                Sale
              </NavLink>
            </HStack>
          </HStack>

          <InputGroup w="auto" display={{ base: "none", md: "flex" }}>
            <InputLeftElement
              color="gray.500"
              cursor="pointer"
              _hover={{ color: "blue" }}
            >
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search..." border={"1px solid gray"} />
          </InputGroup>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={{ base: 1, md: 1, lg: 5 }}
            alignItems={"center"}
            padding=" 0 1rem"
          >
            {isAuth ? (
              <>
                {/* <ButtonLogout
                    style={{ marginRight: "10px" }}
                    logout={() => {
                      logoutSuccess();
                      localStorage.clear();
                      window.location.reload();
                    }}
                  /> */}
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      name={`${user.name}`}
                      // src={
                      //   "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      // }
                    />
                  </MenuButton>
                  <MenuList>
                    {/* <MenuGroup title='Profile'> */}
                    <MenuItem>
                      {/* <Button onClick={()=>alert("i am clicked") }>LogOUT</Button> */}
                      <ButtonLogout
                        style={{ marginRight: "10px" }}
                        logout={() => {
                          logoutSuccess();
                          // localStorage.clear();
                          // window.location.reload();
                        }}
                      />
                    </MenuItem>
                    {/* <MenuItem>Payments </MenuItem> */}
                    {/* </MenuGroup> */}
                    {/* <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup> */}
                  </MenuList>
                </Menu>
              </>
            ) : (
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#7600dc" : "#545e6f",
                  fontSize: "1.6rem",
                  margin:'auto 1rem'
                })}
                to="/signin"
              >
                <FaUser />
              </NavLink>
            )}

            {/* <Button
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
          </Button> */}
            <NavLink
              to="/wishList"
              style={({ isActive }) => ({
                color: isActive ? "#7600dc" : "#545e6f",
                fontSize: "1.6rem",
                margin:'auto 1rem'
              })}
            >
              <FaRegHeart />
            </NavLink>
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

            <NavLink
              to="/add-to-cart"
              style={({ isActive }) => ({
                color: isActive ? "#7600dc" : "#545e6f",
                margin:"auto 1rem",
                padding:'auto 1rem'
              })}
            >
              <Tooltip
                label={`You have 0 items in the cart`}
                fontSize="lg"
                background="lightgrey"
                color={"black"}
              >
                <Box display={"flex"} alignItems={"center"} position={'relative'}>
                  <Text fontSize={"1.6rem"}>
                  <HiShoppingCart/>
                  </Text>
                  <Text
                    p={"1px"}
                    w={"20px"}
                    backgroundColor={"black"}
                    color={"white"}
                    marginLeft={"7px"}
                    borderRadius={"50%"}
                    position={'relative'}
                  >
                    <span style={{ textAlign: "center",position:'sticky',top:'0rem' }}>0</span>
                  </Text>
                </Box>
              </Tooltip>
            </NavLink>

            {/* </Link> */}
            {/* <span className={style.cart_item_total}>{6}</span> */}
            {/* {localStorage.getItem("name") ? (
            <Avatar
              size={"sm"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />)
            :
            ("")} */}
          </Stack>
          {/* </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} pt={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <InputGroup w="auto" display={{ md: "flex" }}>
                <InputLeftElement
                  color="gray.500"
                  cursor="pointer"
                  _hover={{ color: "blue" }}
                >
                  <FiSearch />
                </InputLeftElement>
                <Input placeholder="Search..." border={"1px solid gray"} />
              </InputGroup>
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
