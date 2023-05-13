import { Box, Button, Flex, Icon, Text, background } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { Logout } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logoutadmin } from "../../Redux/Admin/action";

const Sidebar = (props) => {
    const {admindata,admin} = useSelector((store) => store.adminLoginReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const LogoutAdmin = ()=>{
        dispatch(logoutadmin(admin));
        navigate('/admin-login')
    }
    return (
        <Box
            zIndex="sticky"
            h="full"
            overflowX="hidden"
            overflowY="auto"
            bg="white"
            border
            color="inherit"
            w="60"
            boxShadow={"md"}
            {...props}
        >
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
                <NavItem icon={FaUserCircle}><Link to={"/admin-admins"}>Users</Link></NavItem>
                <NavItem icon={HiCollection}><Link to={"/admin-men-products"}>Men Products</Link></NavItem>
                <NavItem icon={HiCollection}><Link to={"/admin-women-products"}>Women Products</Link></NavItem>
                <NavItem icon={AiFillGift}><Link to={"/admin-order-products"}>Orders</Link></NavItem>
                <NavItem icon={CgLogOut}>
                   <Button bg={'whiteAlpha.300'} _hover={{background:'#c62828',color:"white"}} padding={'0px 3px 0px 5px'} onClick={LogoutAdmin}>Logout</Button> 
                    </NavItem>
            </Flex>
        </Box >

    )
}

export default Sidebar;