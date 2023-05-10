import { Box, Drawer, DrawerContent, DrawerOverlay, HStack, Heading, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../../Components/adminsection/Sidebar";
import Navbar from "../../Components/adminsection/Navbar";
import { useEffect } from "react";
import AddAdmin from "../../Components/adminsection/AddAdmin";
import Statistics from "../../Components/adminsection/Statistics";
import AdminTable from "../../Components/adminsection/AdminTable";



const AdminsPage = ()=>{
    const sidebar = useDisclosure();

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
          <Box display={"flex"} justifyContent={"flex-end"} pr={20} pl={20} alignItems={"center"} mt={3} >
            <AddAdmin/>
          </Box>

          <Box boxShadow={"xl"} w={"92%"} margin={"auto"} mt={5} pb={3}borderRadius={7} border={"1px solid #CBD5E0"}>
            <Heading color={"#718096"} py={3}>Dashboard</Heading>
            <Statistics/>
          </Box>
          <Box border={"1px solid"} w={"92%"} margin={"auto"} mt={5} borderRadius={7}>
            <Heading color={"#718096"} py={3}>Admin Details</Heading>
            <AdminTable/>
          </Box>
        </Box>
      </Box>
    </Box>
    );
}

export default AdminsPage;