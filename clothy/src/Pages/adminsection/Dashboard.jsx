import React from 'react'
import AddProduct from '../../Components/adminsection/AddProduct'
import Sidebar from '../../Components/adminsection/Sidebar'
import { Box, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import Navbar from '../../Components/adminsection/Navbar';

const Dashboard = () => {

  const sidebar = useDisclosure();

  return (
    <Box minH="100vh" border={"1px solid"}>

      <Sidebar display={{ base: "none", md: "unset" }} />

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

      <Box ml={{ base: 0, md: 60 }} transition=".3s ease" >

        <Navbar onclick={sidebar.onOpen} />

        <Box p="3" border={"1px solid"}>
          
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard
