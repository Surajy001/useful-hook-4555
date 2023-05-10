import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  // IconButton,
  // createIcon,
  // IconProps,
  useColorModeValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import { Carousels } from "../Components/HomeComponents/Carousels";
import { Carousels2 } from "../Components/HomeComponents/Carousels2";
import { FollowPart } from "../Components/HomeComponents/FollowPart";
import style from "../Components/Navbar/Navbar.module.css";

export const HomePage = () => {
  return (
    <Container maxW={"95%"} marginBottom={"40px"}>
      <Stack
      textAlign={'center'}
        align={"center"}
        margin={'auto 13rem'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack spacing={{ base: 1, md: 5 }} w={"200px"} >
          <Text>
            Fashion is a form of self-expression and autonomy at a particular
            period.
        <Text display={"flex"} fontWeight={600}>
        <NavLink to="/About" style={{fontWeight:'bold',color:'dodgerblue',fontSize:'1.2rem',textTransform:'Capitalize'}}>Want to Know more about us Click the Link  <ExternalLinkIcon/></NavLink> &nbsp;

          </Text>
          </Text>
        </Stack>

        <Stack
          // border={"2px solid green"}
          lineHeight={0.9}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "8xl" }}
          className={style.header}
        >
          <Text>CLOTHES ARE</Text>
          <Box display={"flex"} justifyContent={"center"}>
            <Text>THE</Text>
            <Box
              position={"relative"}
              marginTop={{ base: "5px", md: "5px", lg: "14px" }}
              width={{ base: "20%", md: "20%", lg: "20%" }}
              h={{ base: "18px", md: "24px", lg: "60px" }}
              style={{
                border: "1px solid",

                // height: "60px",
                borderRadius: "30px",
                // verticalAlign: "middle",
                // display: "table",
                position: "relative",
                // marginTop:"25px"
              }}
            >
              <Text
                position="relative"
                marginTop={{ base: "-7px", md: "-8px", lg: "-20px" }}
              >
                {" "}
                →{" "}
              </Text>
            </Box>
            <Text>SPIRIT </Text>
            {/* →  */}
          </Box>
          <Text>OF FASHION</Text>
        </Stack>

        <Box border={"1px solid"} w={"170px"} borderRadius={"80px"} h={"250px"}>
          <Image
            alt={"Hero Image"}
            w={"70%"}
            h={"70%"}
            margin={"auto"}
            borderRadius={"80px"}
            marginTop={"7px"}
            src={
              "https://m.media-amazon.com/images/I/61pukqBVanL._AC_UX466_.jpg"
            }
          />
          <Text>Shirt</Text>
          <Text>₹429</Text>
        </Box>
      </Stack>

      <Stack
        align={"center"}
        spacing={{ base: 8, md: 5 }}
        py={{ base: 10, md: 10 }}
        direction={{ base: "column", md: "row" }}
        display={"flex"}
        justifyContent={"center"}
        marginBottom={"40px"}
        gap={{ base: "8px", md: "10px", lg: "70px" }}
        //border={"2px solid red"}
      >
        <Flex
          // flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={{ base: "80%", md: "55%",lg:"22%" }}
          h="300px"
          // border={"2px solid red"}
        >
          <Blob
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            // top={"-20%"}
            // left={0}
            zIndex={-1}
            color={useColorModeValue("orange.400", "orange.400")}
            // border={"5px solid"}
          />
          <Box
            position={"relative"}
            height={"200px"}
            borderRadius={"10px"}
            // border={"1px solid"}
            width={"200px"}
            overflow={"hidden"}
            left={10}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={{ base: "70%", md: "80%",lg:"90%" }}
              h={{ base: "75%", md: "77%",lg:"100%" }}
              marginTop={{base: 7, md: 7,lg:0}}
              borderRadius={"10px"}
              src={
                "https://www.myshopstore.in/wp-content/uploads/2021/08/Mens-Clothing.jpeg"
              }
            />
          </Box>
        </Flex>

        <Stack
        //border={"3px solid"}
            border={"1px solid"}
            w={{base:"220px",md:"250px", lg:"220px"}}
            borderRadius={"100px"}
            h={{base:"300px",md:"240px", lg:"300px"}}
        >
          <Box
            border={"1px solid"}
            w={{base:"100px", md:"60px", lg:"100px"}}
            h={{base:"100px", md:"60px", lg:"100px"}}
            borderRadius={"50%"}
            position="relative"
            bgColor={"black"}
            left={{base:"140px", md:"110px", lg:"140px"}}
          >
            <Text w={"70%"} 
            color={"white"}
            marginTop={{base:"24px",md:"10px", lg:"24px"}}
            marginLeft={{base:"14px",md:"8px", lg:"14px"}}
            fontSize={{base:"13px", md:"11px", lg:"13px"}}
            >Expoler More</Text>
            
          </Box>
          <Box> 
          <Box 
           display={"flex"}
          //  border={"1px solid red"}
           justifyContent={"center"}
          //  gap={"5px"}
           fontSize={"60px"}
           fontWeight={600}
           marginTop={"-20px"}
           > 
          <Text>25</Text> <span style={{width:"20px", 
          // border:"1px solid",
          fontSize:"16px",
          paddingTop:"18px",
          fontWeight:"800",
          }}> % </span> <Text 
          fontSize={"25px"}
          paddingTop={"35px"}
          fontWeight={600}
          // border={"1px solid red"}
          >off</Text> <br/>
          </Box>
          <Text fontWeight={600}>our all-new arrivals</Text><br/>
          <Text fontWeight={600} fontSize={"25px"} paddingTop={"20px"}>+</Text>
           </Box>
        </Stack>

        <Flex
          // flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={{ base: "80%", md: "55%",lg:"22%" }}
          h="300px"
          // border={"2px solid red"}
        >
          <Blob
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            // top={"-20%"}
            // left={0}
            zIndex={-1}
            color={useColorModeValue("orange.400", "orange.400")}
            // border={"5px solid"}
          />
          <Box
            position={"relative"}
            height={"200px"}
            borderRadius={"10px"}
            // border={"1px solid"}
            width={"200px"}
            overflow={"hidden"}
            left={10}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={{ base: "70%", md: "80%",lg:"90%" }}
              h={{ base: "75%", md: "77%",lg:"100%" }}
              marginTop={{base: 7, md: 7,lg:0}}
              borderRadius={"10px"}
              src={
                "https://www.myshopstore.in/wp-content/uploads/2021/08/Mens-Clothing.jpeg"
              }
            />
          </Box>
        </Flex>
        {/* </Stack> */}
      </Stack>

      <Heading textAlign={"left"}>POPULAR PRODUCTS</Heading>
      <Carousels />

{/* 
      <Flex
       border={"1px solid"}
       borderRadius={"10px"}
       w={{base:"95%",lg:"80%"}}
       h={"500px"}
       margin={"auto"}
       marginTop={"50px"}
       marginBottom={"50px"}
       
       >
        <Box 
        border={"1px solid red"} 
        w={"50%"}
        h={"100%"}
        
        >
        <Image h={"98%"} src="https://m.media-amazon.com/images/I/61zXf1BClKL._AC_UL600_FMwebp_QL65_.jpg" 
            alt="image"
            
          />
          <Box
            position={"relative"}
            height={"150px"}
            rounded={"xl"}
            // border={"1px solid"}
            width={"150px"}
            overflow={"hidden"}
            left={4}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              }
            />
          </Box>
        </Flex>
      </Stack>

      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack spacing={{ base: 1, md: 5 }} w={"200px"}>
          <Text>
            Fashion is a form of self-expression and autonomy at a particular
            period.
          </Text>
          <NavLink to="/About">Read More</NavLink>
        </Stack>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              CLOTHES ARE
            </Text>
            <br />
            <Text as={"span"}>THE - SPIRIT OF FASHION</Text>
          </Heading>
        </Stack>

        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
=======
        </Box>
        <Box border={"1px solid green"} 
        display={"flex"} 
        w={"50%"}
        h={"100%"}
        
        >
          <Box w={"50%"}  h={"100%"} >
          <Box border={"1px solid gray"} h={"50%"} display={"flex"} > 
          <Text display={"flex"} alignItems={"center"} border={"1px solid red"}>Pattern <span>Colourful & Print</span> </Text> </Box>
          <Box border={"1px solid gray"} h={"50%"} > <Text> we have grown from a pioneer in e-commerce to become a leading Indian online platform. <span>Read more</span> </Text> </Box>
          </Box>
          <Box w={"50%"} h={"100%"} textAlign={"center"}>
          <Box border={"1px solid gray"} h={"50%"}> <Text> We are the online platform for fashion and lifestyle </Text> </Box>
         <Box border={"1px solid gray"} h={"50%"}> <Text> Material </Text> </Box>
        </Box>
        </Box>
      </Flex> */}
        

      <Heading textAlign={"left"}>NEW ARRIVALS</Heading>
      <Carousels2 />

      <FollowPart />
    </Container>
  );
};

// const PlayIcon = createIcon({
//   displayName: 'PlayIcon',
//   viewBox: '0 0 58 58',
//   d:
//     'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
// });

export const Blob = (props) => {
  return (
    <Icon
      // width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      // border={"1px solid green"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"        fill="currentColor"
      />
    </Icon>
  );
};
