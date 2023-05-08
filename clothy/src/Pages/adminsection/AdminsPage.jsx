import { Box, Drawer, DrawerContent, DrawerOverlay, Heading, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../../Components/adminsection/Sidebar";
import Navbar from "../../Components/adminsection/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAdmin from "../../Components/adminsection/AddAdmin";



const AdminsPage = ()=>{
    const sidebar = useDisclosure();
    const dispatcher = useDispatch();
    const Data= useSelector((store)=>{
      return store.adminReducer;
    })


    useEffect(()=>{
    //   dispatcher(getMenProduct)
    },[])

    

    return (
      <Box minH="100vh" >
  
        <Sidebar display={{ base: "none", md: "unset"}} />
  
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
  
          <DrawerOverlay />
          <DrawerContent>
            <Sidebar w="full" borderRight="none" border="1px solid" />
          </DrawerContent>
        </Drawer>
  
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease" border={"1px solid"}>
  
          <Navbar onclick={sidebar.onOpen} />
  
          <Box display={"flex"} justifyContent={"space-between"} pr={20} pl={20} alignItems={"center"} mt={3}>
            <p>fasdfaasd</p>
            <AddAdmin/>
          </Box>
          <Box border={"1px solid"} w={"90%"} margin={"auto"} mt={5} borderRadius={7}>
            <Heading color={"#718096"} py={5}>Admin's Database</Heading>
            
          </Box>
        </Box>
      </Box>
    );
}

export default AdminsPage;