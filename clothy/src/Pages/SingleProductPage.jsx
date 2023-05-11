// import { Image, Box, Flex, Text, Grid, Stack, useColorModeValue, List, ListItem, Container } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Grid,
   
  } from "@chakra-ui/react";
  import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { URl } from '../Redux/WomensPageRedux/action';

const SingleProductPage = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const singlePage = async() => {
        setLoading(true)
       let data=await axios.get(`${URl}/products/${id}`).then(res => {
            //console.log(res.data)
            setData(res.data)
        }).catch(err => {
            console.log(err)
        }).finally(()=>{
           setLoading(false)
        })
    }

    useEffect(() => {
        singlePage()
    }, [])

    const { images, brand, category,mrp_price, description,  discount_percentage, price,title,rating } = data;

    return (

        <Container maxW={"6xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 20 }}
          py={{ base: 10, md: 14 }}
        >
          <Box>
          
            {/* {images ? <ImageCard imgs={images} alt={id} boxSize={{ base: "full", md: "100%" }} /> : <Text>Loading...</Text>} */}

           {loading ? <h1>Loading...</h1>: 

            <Flex  border={"1px solid gray"}  direction={{ base: "column", md: "row" }}  style={{width:"100%" , }} >

            <Box   style={{width:"30%"}} > 
                     <Box  w={{ base: "33%", md: "100%" }}>
                         {images ? <Image src={images[1]} alt=""  /> : <Text>Loading...</Text>}
                     </Box>
                     <Box w={{ base: "33%", md: "100%",sm:"50%" }}>
                         {images ? <Image src={images[2]} alt="" boxSize={{ base: "full", md: "100%" }} /> : <Text>Loading...</Text>}
                     </Box>
                     <Box w={{ base: "33%", md: "100%" }}>
                         {images ? <Image src={images[3]} alt="" boxSize={{ base: "full", md: "100%" }} /> : <Text>Loading...</Text>}
                     </Box>
             </Box>
                
                 <Box border={"1px solid gray"}  style={{width:"70%"}}>
                     <Image src={images ? images[0] : ''} alt="" boxSize={{ base: "full", md: "100%" }} />
                 </Box>

                 </Flex>
}
                
          </Box>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <Box as={"header"} align={"left"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "1xl", sm: "2xl" }}
                >
                  {title}
                </Heading>
                <Box
                  color={useColorModeValue("black.900", "black.100")}
                  fontWeight={600}
                  fontSize={"2xl"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"10px"}
                  // pt={1}
                >
                  <Box>{rating} ★</Box>
                  <Text fontSize={"1rem"}>{`${
                    Math.floor(Math.random() * (500 - 5 + 1)) + 5
                  } ratings`}</Text>
                </Box>

                <List>
                  <ListItem>
                    <Text
                      as={"span"}
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "12px", sm: "1rem" }}
                      
                    >
                      ₹{price}
                    </Text>{"   "}
                    <Text
                      as={"span"}
                      lineHeight={1.1}
                      fontWeight={500}
                      fontSize={{ base: "12px", sm: "1rem" }}
                      textDecoration={"line-through"}
                    >
                      ₹{mrp_price}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                     Discount:
                    </Text>{" "}
                    {discount_percentage}%
                  </ListItem>
                </List>
              </Box>

              <Box align={"left"}>
                <Text
                   fontSize={{ base: "16px", lg: "22px" }}
                   color={useColorModeValue("pink.400", "orange.400")}
                  fontWeight={"500"}
                  
                  // mb={"2"}
                >
                  Product Description
                </Text>

                <Text align={"justify"}>{description}</Text>
              </Box>
              <Box align={"left"}>
                <Text
                  fontSize={{ base: "16px", lg: "22px" }}
                  color={useColorModeValue("pink.400", "orange.400")}

                  fontWeight={"500"}
                  
                  mb={"1"}
                >
                  Product Delivery
                </Text>

                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    style={{
                      border: "black",
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderBottom: "1px solid #ccc",
                      marginBottom: "1rem",
                      gap: "2rem",
                    }}
                  >
                    <Box align={"center"}>
                      <TbTruckDelivery
                        style={{
                          backgroundColor: "rgba(220, 220, 220, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>Free Delivery</Text>
                    </Box>
                    <Box align={"center"}>
                      <TbReplace
                        style={{
                          backgroundColor: "rgba(220, 220, 220, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>7 Days Replacement</Text>
                    </Box>
                    <Box align={"center"}>
                      <TbTruckDelivery
                        style={{
                          backgroundColor: "rgba(220, 220, 220, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>MedZ+ Delivery</Text>
                    </Box>
                  </Box>
                </Box>

                <Box pt={1}>
                  <Text
                    fontSize={{ base: "16px", lg: "22px" }}
                    color={useColorModeValue("pink.400", "orange.400")}
                    fontWeight={"500"}
                    mb={"1"}
                    
                  >
                    Product Details
                  </Text>

                  <List spacing={1}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Available:
                      </Text>{" "}
                      <span style={{ fontWeight: "500" }}>In Stock</span>
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Category:
                      </Text>{" "}
                      <span style={{ fontWeight: "500" }}>
                        {category}
                      </span>
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Brand:
                      </Text>{" "}
                      <span style={{ fontWeight: "500" }}>
                        {brand}
                      </span>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={1}
              size={"lg"}
              py={"1"}
              bg={'blue.400'}
              // bgGradient="linear(to-r, blue.400, orange.400)"
              color={useColorModeValue("white", "gray.900")}
              
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
                bg:'green.500'
              }}
              // onClick={addToCart}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    )
}

export default SingleProductPage;
