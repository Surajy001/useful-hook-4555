import React from 'react';
import { Box, Flex } from '@chakra-ui/react';



import Sidebar from '../Components/WomenPageComponents/Sidebar';

import WomensProductList from '../Components/WomenPageComponents/WomensProductList';

export const WomensPage = () => {
  return (
    <Flex width="95%" margin={"auto"}  marginTop={"20px"}>
      <Box w="20%" 
      // border="1px solid red"
      >
        <Sidebar />
      </Box>
      <Box w="80%" 
      // border="1px solid red"
      >
        <WomensProductList />
      </Box>
    </Flex>
  );
};
