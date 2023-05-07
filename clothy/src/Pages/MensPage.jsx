import React from 'react';
import { Box, Flex } from '@chakra-ui/react';


import Sidebar from '../Components/MensPageComponents/Sidebar';
import MensProductList from '../Components/MensPageComponents/MensProductList';
export const MensPage = () => {
  return (
    <Flex width="95%" margin={"auto"}>
      <Box w="20%" 
      // border="1px solid red"
      >
        <Sidebar />
      </Box>
      <Box w="80%" 
      // border="1px solid red"
      >
        <MensProductList />
      </Box>
    </Flex>
  );
};
