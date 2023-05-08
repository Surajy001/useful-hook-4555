import React from "react";
import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spacer,
  Stack,
} from "@chakra-ui/react";
function SkeletonCart() {
  return (
    <Flex gap={"20px"} justify='space-between' width={'100%'}>
      <Box margin="5px 10px">
        <Skeleton height="120px" margin="5px 9px" width="100px" borderRadius={'8px'} />
        <Flex>
          <Skeleton height="50px" width="50px" margin="3px 5px"borderRadius="10px" />
          <Skeleton height="50px" width="50px" margin="3px 5px" borderRadius="10px" />
        </Flex>
      </Box>
      <Stack>
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" width={'200px'}/>
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
        <Skeleton height="10px" width="100px" />
      </Stack>
      <Stack>
          <Skeleton height="50px" width="100px" margin="10px 5px" borderRadius="10px" />
      </Stack>
    </Flex>
  );
}

export default SkeletonCart;
