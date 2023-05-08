import { Box, Drawer, DrawerContent, DrawerOverlay, HStack, Heading, useDisclosure } from "@chakra-ui/react";
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
      <Box>
      <Box transition=".3s ease">
        <Navbar onclick={sidebar.onOpen} />
      </Box>

      <Box display={"flex"}>
        <Box width={"18%"} borderRight={"2px solid #CBD5E0"} >
          <Sidebar display={{ base: "none", md: "unset" }}/>

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
        </Box>
        <Box w={"92%"}>
          <Box display={"flex"} justifyContent={"space-between"} pr={20} pl={20} alignItems={"center"} mt={3} >
            <p>fasdfaasd</p>
            <AddAdmin/>
          </Box>

          <Box border={"1px solid"} w={"92%"} margin={"auto"} mt={5} borderRadius={7}>
            <Heading color={"#718096"} py={5}>Men's Product Data</Heading>
          </Box>
        </Box>
      </Box>
    </Box>
    );
}

export default AdminsPage;