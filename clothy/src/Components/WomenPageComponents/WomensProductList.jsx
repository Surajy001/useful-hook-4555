import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {womengetProducts} from '../../Redux/WomensPageRedux/action';
import FavoriteIcon from "@mui/icons-material/Favorite";
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
  useToast,
} from '@chakra-ui/react';
import WomensProductCart from './WomensProductCart';
import { GetTemperaryCartData, PostTemporaryDataOfUser } from '../../Redux/CartReducer/action';

const WomensProductList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const womenproducts = useSelector(
    (store) => store.womenproductReducer.products
  );
  const { user } = useSelector((store) => store.authReducer);
  const { isAuth, cart } = user;
  const { Cart } = useSelector((state) => state.CartReducer);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const toast = useToast();
  const [toreload,setToreload] = useState(false); 
  let obj = {
    params: {
      category: searchParams.getAll('category'),
      brand: searchParams.getAll('brand'),
      _sort: searchParams.get('order') && 'price',
      _order: searchParams.get('order'),
    },
  };
  const AddToCart = async (e,id) => {
    setToreload(!toreload)
    if (isAuth) {
      let cartDetails = cart?.find((item) => item.id === id);
      if (cart.includes(cartDetails)) {
        // setIsAddtoCart(true)
        toast({
          title: "Product, Already In the Cart!",
          description: `🚀Go to the cart page to see the cart-details`,
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        // setIsAddtoCart(false);
        toast({
          title: "Congratulations, Product Added To Cart!!👍",
          description: `🚀Go to the cart page to see the cart-details`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    } else {
      let dataCart = currentProducts.find((item) => item.id == id);
      // dispatch(GetTemperaryCartData);
      let actualCartDataToPost = Cart?.find((item) => item?.id == dataCart.id);
      // console.log(dataCart)
      // console.log(actualCartDataToPost)
      // Change Add to cart to View in cart
      if (actualCartDataToPost) {
        // setIsAddtoCart(true)
        toast({
          title: "Product, Already In the Cart!",
          description: `🚀Go to the cart page to see the cart-details`,
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return 
      }else{         
          // I am deepak i am not able to apply this in actions js and it is giving me erorr of please link it with thunk 
          // there must be some error need to be fixed but for now it is fine
          Cart.push(dataCart);
          dispatch(PostTemporaryDataOfUser(Cart))
            toast({
              title: "Congratulations, Product Added To Cart!!👍",
              description: `🚀Go to the cart page to see the cart-details`,
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
      }
    }
  };
  useEffect(() => {
    dispatch(womengetProducts(obj));
  }, [location.search]);

  useEffect(()=>{
    dispatch(GetTemperaryCartData)
},[toreload])

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
              <WomensProductCart {...el} AddToCart={AddToCart} />
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
