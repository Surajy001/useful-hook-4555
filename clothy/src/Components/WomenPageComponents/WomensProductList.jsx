import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {womengetProducts} from '../../Redux/WomensPageRedux/action';

// import WomensProductCart from './WomensProductCart';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  Box,
  Grid,
  GridItem,
  Spinner,
  VStack,
  Button,
  HStack,
} from '@chakra-ui/react';
import WomensProductCart from './WomensProductCart';

const WomensProductList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const womenproducts = useSelector(
    (store) => store.womenproductReducer.products
  );
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  let obj = {
    params: {
      category: searchParams.getAll('category'),
      brand: searchParams.getAll('brand'),
      _sort: searchParams.get('order') && 'price',
      _order: searchParams.get('order'),
    },
  };

  useEffect(() => {
    dispatch(womengetProducts(obj));
  }, [location.search]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = womenproducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(womenproducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <Button
          key={i}
          variant={currentPage === i ? 'solid' : 'ghost'}
          onClick={() => handlePageChange(i)}
          _hover={{bg:"dodgerblue"}}
        >
          {i}
        </Button>
      );
    }
    return (
      <>
        <Button
          variant="ghost"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          _hover={{bg:"dodgerblue"}}
        >
          {'Prev'}
        </Button>
        {pageButtons}
        <Button
          variant="ghost"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          _hover={{bg:"dodgerblue"}}
        >
          {'Next'}
        </Button>
      </>
    );
  };
  

  return (
    <Box p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={6}
      >
        {currentProducts.length > 0 ? (
          currentProducts.map((el) => (
            <GridItem key={el.id}>
              {/* <WomensProductCart {...el} /> */}
              <WomensProductCart {...el} />
            </GridItem>
          ))
        ) : (
          <VStack mt={8}>
            <Spinner size="xl" />
          </VStack>
        )}
      </Grid>
      <div style={{margin:"auto", width:"100%", display:"flex", justifyContent:"center"}} >
      <HStack mt={8}>{renderPagination()}</HStack>
      </div>
    
    </Box>
  );
};

export default WomensProductList;

const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;
