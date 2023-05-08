import { Box, Drawer, DrawerContent, DrawerOverlay, Heading, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../../Components/adminsection/Sidebar";
import Navbar from "../../Components/adminsection/Navbar";
import AddProduct from "../../Components/adminsection/AddProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWomenProduct } from "../../Redux/Admin/action";
import ProductTable from "../../Components/adminsection/ProductTable";



const WomenProductPage = ()=>{
    const sidebar = useDisclosure();
    const dispatcher = useDispatch();
    const productsData= useSelector((store)=>{
      return store.adminReducer;
    })


    useEffect(()=>{
      dispatcher(getWomenProduct)
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
            <AddProduct />
          </Box>
          <Box border={"1px solid"} w={"90%"} margin={"auto"} mt={5} borderRadius={7}>
            <Heading color={"#718096"} py={5}>Women's Product Data</Heading>
            <ProductTable data={productsData.products}/>
          </Box>
        </Box>
      </Box>
    );
}

export default WomenProductPage;