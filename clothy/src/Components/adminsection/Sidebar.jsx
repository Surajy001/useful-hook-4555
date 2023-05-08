import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { Link } from 'react-router-dom';


const Sidebar = (props) => {

    const NavItem = (props) => {
        const { icon, children } = props;
        return (
            <Flex
                align="center"
                px="4"
                pl="4"
                py="21"
                cursor="pointer"
                color="inherit"
                _dark={{ color: "gray.400" }}
                _hover={{
                    bg: "gray.100",
                    _dark: { bg: "gray.900" },
                    color: "gray.900"
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
            >
                {icon && (
                    <Icon
                        mx="2"
                        boxSize="4"
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        );
    };

    return (
        <Box
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="white"
            _dark={{ bg: "gray.800" }}
            border
            color="inherit"
            borderRightWidth="1px"
            w="60"
            boxShadow={"md"}
            {...props}
        >
            <Flex px="4" py="30" align="center">
                <Text
                    fontSize="2xl"
                    ml="2"
                    color="brand.500"
                    _dark={{ color: "white" }}
                    fontWeight="semibold"
                >
                    Clothy
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <NavItem icon={MdHome}>
                    <Link to={"/admin-dashboard"}>Dashboard</Link>
                </NavItem>
                <NavItem icon={FaUserCircle}><Link to={"/admin-admins"}>Admins</Link></NavItem>
                <NavItem icon={HiCollection}><Link to={"/admin-men-products"}>Men Products</Link></NavItem>
                <NavItem icon={HiCollection}><Link to={"/admin-women-products"}>Women Products</Link></NavItem>
                <NavItem icon={AiFillGift}>Orders</NavItem>
                <NavItem icon={CgLogOut}>Logout</NavItem>
            </Flex>
        </Box>

    )
}

export default Sidebar;