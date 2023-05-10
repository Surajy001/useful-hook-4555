import { Box, Drawer, DrawerContent, DrawerOverlay, HStack, Heading, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../../Components/adminsection/Sidebar";
import Navbar from "../../Components/adminsection/Navbar";
import { useEffect, useState } from "react";
import UserTable from "../../Components/adminsection/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails  } from "../../Redux/Admin/action";
import Pagination from "../../Components/adminsection/Pagination";
import SkeletonCart from "../../Components/Cart/SkeletonCart";


const UserPage = () => {
  const sidebar = useDisclosure();
  const dispatcher = useDispatch();

  const userData = useSelector((store) => {
    return store.adminReducer;
  });

  const [pgno, setPgno] = useState(1);
  const totalPages = Math.ceil(userData.totalProducts / 10);


  const handlePageChange = (page) => {
    setPgno(page)
  }

  useEffect(() => {
    dispatcher(getUserDetails(pgno))
  }, [pgno])

  return (
    <Box>
      <Box transition=".3s ease">
        <Navbar onclick={sidebar.onOpen} />
      </Box>

      <Box display={"flex"}>
        <Box width={"18%"} borderRight={"2px solid #CBD5E0"} >
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
          <Box display={"flex"} justifyContent={"flex-end"} pr={20} pl={20} alignItems={"center"} mt={3} >
            
          </Box>

          <Box border={"1px solid"} w={"92%"} margin={"auto"} mt={5} borderRadius={7}>
            <Heading color={"#718096"} py={5}>Users Details</Heading>
            {userData.isLoading ? <SkeletonCart /> : <UserTable />}
          </Box>
          <div style={{ margin: "auto", width: "90%", display: "flex", justifyContent: "center" }} >
            <HStack my={8}>{<Pagination pgno={pgno} totalPages={totalPages} handlePageChange={handlePageChange} />}</HStack>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default UserPage;