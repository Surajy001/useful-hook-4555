import { Avatar, Flex, IconButton, Input, InputGroup, InputLeftElement, Text, } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiMenu, FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { getAdminData } from '../../Redux/Admin/action';
import { ADMIN_DATA } from '../../Redux/actionType';

const Navbar = ({ onclick }) => {
    const [activeAdmin,setActiveAdmin] = useState({});
    const [reload,setReload] = useState(false)
    const {admindata,admin} = useSelector((store) => store.adminLoginReducer);
    const dispatcher = useDispatch();
    useEffect(()=>{
        dispatcher(getAdminData);
        let admin = admindata.find(item=>item?.isAuth===true);
        let Admin = {...admin};
        setActiveAdmin(Admin?.isAuth);
        dispatcher({type:ADMIN_DATA,payload:admin});
        setActiveAdmin(Admin)
    },[reload])
    useEffect(()=>{
       window.addEventListener('load',(event)=>{
        setReload(!reload);
       }) 
    },[])
    return (
        <Flex
            align="center"
            px={6}
            py={10}
            w="full"
            bg="white"
            borderBottom="2px solid #CBD5E0"
            color="inherit"
            h="14"
            boxShadow={"md"}
        >
            <Text _firstLetter={{
                fontSize: "30px",
                fontWeight: 700,
                color: "rgb(216, 14, 34)",
                fontFamily: "'Raleway', sans-serif",
            }}
                fontWeight={700}
                fontSize={"30px"} w={"7%"}>Clothy.  </Text>
            <Flex justifyContent={'space-between'} w={"93%"}>
                <IconButton
                    display={{ base: "inline-flex", md: "none" }}
                    onClick={onclick}
                    icon={<FiMenu />}
                    size="sm"
                />
                <Flex display={{ base: "none", md: "flex" }} justifyContent={"center"} w={"91%"}>
                    <InputGroup display={{ base: "none", md: "flex" }} w={"40%"}>
                        <InputLeftElement color="gray.500" cursor="pointer" _hover={{ color: "blue" }}>
                            <FiSearch />
                        </InputLeftElement>
                        <Input placeholder="Search for Products..." border={"1px solid grey"} />
                    </InputGroup>
                </Flex>

                <Flex align="center" w={"9%"}>
                    <Avatar
                        size="sm"
                        name={admin?.name}
                        cursor="pointer"
                    />
                    <Text fontWeight={"bold"}>{admin?.name}</Text>
                </Flex>
            </Flex>
        </Flex >
    )
}

export default Navbar;