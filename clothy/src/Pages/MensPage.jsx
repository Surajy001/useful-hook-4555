import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "../Components/MensPageComponents/Sidebar";
import MensProductList from "../Components/MensPageComponents/MensProductList";
export const MensPage = () => {
  return (
    <Flex width="95%" margin={"auto"}>
      <Box
        w="20%"
        // border="1px solid red"
      >
        <Sidebar />
      </Box>
      <Box
        w="80%"
        // border="1px solid red"
      >
        <MensProductList />
      </Box>
    </Flex>
  );
};

{
//   <Stack>
//     <Skeleton height='250px' width="250px" margin="auto" />
//     <Box>
//     <Skeleton height='20px' width="250px" style={{margin:'10px auto',textAlign:'left'}}/>
//        <Skeleton height='20px' width="250px" style={{margin:'10px auto',textAlign:'left'}}/>
//           <Skeleton height='20px' width="250px" style={{margin:'10px auto',textAlign:'left'}}/>
//   </Box>
//   <Box style={{display:'flex',margin:'auto',justifyContent:'space-between',width:'34%'}}>
//   <Skeleton width="82px" height="50px" borderRadius="10px"/>
//   <Skeleton width="82px" height="50px" borderRadius="10px"/>
//   </Box>
// </Stack> 
}
