import React, { useState } from 'react';
import styled from 'styled-components';
import { StarIcon } from '@chakra-ui/icons';

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import AddToCartPage from '../../Pages/AddToCartPage';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addProduct } from '../../Redux/Admin/action';

const ProductCard = styled(Box)`
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const MensProductCart = ({
  id,
  title,
  desc,
  mrp_price,
  discount_percentage,
  category,
  brand,
  price,
  rating,
  gender,
  images,
  AddToCart
}) => {
  const truncatedTitle =
    title.length > 30 ? title.substring(0, 30) + '...' : title;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate=useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const {user} = useSelector(store=>store.authReducer);
  const {isAuth,cart} = user;
  const handleMouseEnter = () => {
    setCurrentImageIndex(1);
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  const handleDetail=()=>{
    navigate(`/product/${id}`)
  };
  
  // const AddToCart = (id)=>{
  //   if(isAuth){
  //     let cartDetails = cart?.find(item=>item.id===id);
  //     if(cart.includes(cartDetails)){
  //       toast({
  //         title: "Product, Already In the Cart!",
  //         description: `🚀Go to the cart page to see the cart-details`,
  //         status: "info",
  //         duration: 3000,
  //         isClosable: true,
  //         position: "top",
  //       })
  //     }else{
  //       toast({
  //         title: "Congratulations, Product Added To Cart!!👍",
  //         description: `🚀Go to the cart page to see the cart-details`,
  //         status: "success",
  //         duration: 3000,
  //         isClosable: true,
  //         position: "top",
  //         })
  //     }
  //   }else{
  //     dispatch(AddtoCartData)
  //     console.log("user is not authenicated",user)
  //   }
  //     // toast({
  //     //   title: "Congratulations, Product Added To Cart!!👍",
  //     //   description: `🚀Go to the cart page to see the cart-details`,
  //     //   status: "success",
  //     //   duration: 3000,
  //     //   isClosable: true,
  //     //   position: "top",
  //     //   })
        
  // }

  return (
    <ProductCard
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      textAlign="left" 
      p="4"
      mb="4"
      // className={style.productCard}
    >
      <Image
        src={images[currentImageIndex]}
        alt="none"
        height="200px"
        objectFit="center"
        style={{ marginTop: '10px' }} // fixed error: changed 'margin' to 'marginTop'
        margin={'auto'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // width={"50%"}
        onClick={handleDetail}
        cursor={"pointer"}
      />

      <Box d="flex"  mt="4" textAlign="center"  >
        <Badge borderRadius="full" px="2" colorScheme="teal" textAlign="center">
          {category}
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
          textAlign="center"
        >
          {brand}
        </Box>
      </Box>

      <Flex mt="1" justifyContent="space-between" >
        <Heading as="h3" size="sm" isTruncated>
          {truncatedTitle}
        </Heading>
      </Flex>

      <Box d="flex" mt="2" >
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < rating ? 'teal.500' : 'gray.300'}
            />
          ))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {rating} reviews
        </Box>
      </Box>

      <Box mt="2" fontWeight="semibold" lineHeight="tight">
         {desc} 
      </Box>

      <Box d="flex" mt="2">
        <Text fontSize="lg" fontWeight="bold" mt="2">
          ₹ {price}
        </Text>
      </Box>

<Box d="flex" mt="2" style={{display:"flex",justifyContent:"space-between"}}>
        <Button colorScheme="blue" size="sm" onClick={(e)=>AddToCart(id)}>
          Add to Cart
        </Button>
        <Button colorScheme="green" size="sm" >
          Buy Now
        </Button>
      </Box>

    </ProductCard>
  );
};

export default MensProductCart;
