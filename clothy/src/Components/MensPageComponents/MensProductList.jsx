import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mengetProducts } from "../../Redux/MensPageRedux/action";
import MensProductCart from "./MensProductCart";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  Box,
  Grid,
  GridItem,
  Spinner,
  VStack,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import {
  AddtoCartData,
  GetTemperaryCartData,
} from "../../Redux/CartReducer/action";
import axios, { Axios } from "axios";
import { ADD_PRODUCT_TO_CART_FOR_NOT_AUTHENTICATED_USER } from "../../Redux/actionType";
import { getMenProduct } from "../../Redux/Admin/action";
import { URl } from "../../Redux/WomensPageRedux/action";

const MensProductList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const menproducts = useSelector((store) => store.menproductReducer.products);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      brand: searchParams.getAll("brand"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(mengetProducts(obj));
  }, [location.search]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = menproducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(menproducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <Button
          key={i}
          variant={currentPage === i ? "solid" : "ghost"}
          onClick={() => handlePageChange(i)}
          _hover={{ bg: "dodgerblue" }}
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
          _hover={{ bg: "dodgerblue" }}
        >
          {"Prev"}
        </Button>
        {pageButtons}
        <Button
          variant="ghost"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          _hover={{ bg: "dodgerblue" }}
        >
          {"Next"}
        </Button>
      </>
    );
  };
  const toast = useToast();
  const { user } = useSelector((store) => store.authReducer);
  const { isAuth, cart } = user;
  const { Cart } = useSelector((state) => state.CartReducer);
  const AddToCart =async (id) => {
    //console.log(id);
    if (isAuth) {
      let cartDetails = cart?.find((item) => item.id === id);
      if (cart.includes(cartDetails)) {
        toast({
          title: "Product, Already In the Cart!",
          description: `🚀Go to the cart page to see the cart-details`,
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
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
      dispatch(GetTemperaryCartData);
      let actualCartDataToPost = Cart?.find((item) => item?.id == dataCart.id);
      if (actualCartDataToPost) {
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
        try {
          // I am deepak i am not able to apply this in actions js and it is giving me erorr of please link it with thunk 
          // there must be some error need to be fixed but for now it is fine
       return await  axios
            .post(`${URl}/TemporaryUserData`, {
              cart: [...Cart, dataCart],
            })
            .then((response) => {
              //console.log(response.data);
              toast({
                title: "Congratulations, Product Added To Cart!!👍",
                description: `🚀Go to the cart page to see the cart-details`,
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top",
              });
            })
            
        } catch(error) {
          console.log(error);
        }
      
      }
    }
  };

  return (
    <Box p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {currentProducts.length > 0 ? (
          currentProducts.map((el) => (
            <GridItem key={el.id}>
              <MensProductCart {...el} AddToCart={AddToCart} />
            </GridItem>
          ))
        ) : (
          <VStack mt={8}>
            <Spinner size="xl" />
          </VStack>
        )}
      </Grid>
      <div
        style={{
          margin: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HStack mt={8}>{renderPagination()}</HStack>
      </div>
    </Box>
  );
};
export default MensProductList;

const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;
