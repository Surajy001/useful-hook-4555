import { Box, Drawer, DrawerContent, DrawerOverlay, HStack, Heading, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../../Components/adminsection/Sidebar";
import Navbar from "../../Components/adminsection/Navbar";
import AddProduct from "../../Components/adminsection/AddProduct";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenProduct } from "../../Redux/Admin/action";
import ProductTable from "../../Components/adminsection/ProductTable";
import Pagination from "../../Components/adminsection/Pagination";
import SkeletonCart from "../../Components/Cart/SkeletonCart";



const MenProductPage = () => {
  const sidebar = useDisclosure();
  const dispatcher = useDispatch();
  const productsData = useSelector((store) => {
    return store.adminReducer;
  });
  const [pgno, setPgno] = useState(1);
  const totalPages = Math.ceil(productsData.totalProducts / 10);

  const handlePageChange = (page) => {
    setPgno(page)
  }

  useEffect(() => {
    dispatcher(getMenProduct(pgno))
  }, [pgno])

  return (
    <Box>
      <Box transition=".3s ease">
        <Navbar onclick={sidebar.onOpen} />
      </Box>

      <Box display={"flex"}>
        <Box width={"18%"} borderRight={"2px solid #CBD5E0"}>
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
        </Box>
        <Box w={"92%"}>
          <Box display={"flex"} justifyContent={"flex-end"} pr={20} pl={20} alignItems={"center"} mt={3}>
            <AddProduct/>
          </Box>

          <Box border={"1px solid"} w={"92%"} margin={"auto"} mt={5} borderRadius={7}>
            <Heading color={"#718096"} py={5}>Men's Product Data</Heading>{productsData.isLoading ? <SkeletonCart /> :
              <ProductTable data={productsData.mensProducts} />}
          </Box>

          <div style={{ margin: "auto", width: "90%", display: "flex", justifyContent: "center" }} >
            <HStack my={8}>{<Pagination pgno={pgno} totalPages={totalPages} handlePageChange={handlePageChange} />}</HStack>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default MenProductPage;