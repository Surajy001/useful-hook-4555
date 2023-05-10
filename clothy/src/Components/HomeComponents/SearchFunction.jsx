 import React, { useEffect, useState } from 'react';
 import {
    Box,Button,useDisclosure,Input,Image,Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
  } from '@chakra-ui/react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from "../Navbar/Navbar.module.css";

 const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data,setData] = useState([]);
    const [searchData,setSearchdata] = useState([]);
    

    const getData = () => {
        axios.get('http://localhost:8080/products')
        .then((res)=>{
          //console.log(res.data);
            setData(res.data)
        })
    };
  
    const handelSearch = (quary) => {
       let Search = data.filter((ele)=>{
        let title = ele.title.toLowerCase();
        return (title.indexOf(quary) > -1 )
       })
       //console.log("search",Search);
       setSearchdata(Search)
    };


    useEffect(()=>{
      getData();
      // window.reload();
      
    },[]);


return (
     <div>
            <Input
              w="700px"
              variant='outline'
              bgColor="gray.100"
              type="text"
              placeholder="Search"
              onClick={onOpen}
              size={{base:'sm',md:'md'}}
              width={{base:'300px',md:'300px',xl:'700px'}}
      />

 <Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent >
    <ModalHeader  fontFamily='serif'> <Text className={style.logo} fontWeight={700} fontSize={"30px"}>
                  Clothy.{" "}
                </Text></ModalHeader>
    <ModalCloseButton />
    <ModalBody >
     <Input  onChange={(e) => handelSearch(e.target.value)} placeholder='Search'  size='sm' />

      {searchData.length > 0 ? <Flex gap='10px' m='auto' mt='10px'>
        
        <Box  w='100%' h='350px' overflow='scroll' scrollBehavior='smooth'>
          {
            searchData && searchData.map((ele)=>(
                <Link to={`/product/${ele.id}`} >
                <Flex onClick={onClose} key={ele.id} h='70px' border='2px solid gray' _hover={{border:'2px solid green'}} 
                rounded='sm' mb='1px' p='2px'>
                    <Image border='1px solid' w='20%'rounded='sm' h='100%' src={ele.images} alt={ele.title}/>
                    <Box w='80%' pl='5px'>
                      <Text color='black' fontSize='12px'lineHeight='12px'>
                        {ele.title}
                      </Text>
                      <Text as='b' color='orange' fontSize='12px'>
                        Rating:{ele.rating}/5
                      </Text>
                    </Box>
                </Flex>
                </Link>
            ))
          }
        </Box>
      </Flex> :   
       <Box display={{base:'none',md:'block'}} mt={"5px"}>
         <Text mt='5px' as='b' color='black' fontFamily='sans-serif' textAlign='center'>Shopping Your Clothes</Text>
        <Flex  w='90%' m='auto' gap='5px'  alignItems='center' mt={"5px"}>
         <Image m='auto' w='25%' rounded='sm' src='https://m.media-amazon.com/images/I/51hvszr9UvL.._SX._UX._SY._UY_.jpg'  alt={'01'}/>
         <Image m='auto' w='25%' rounded='sm' src='https://m.media-amazon.com/images/I/71x2jTpVORL._AC_UL600_FMwebp_QL65_.jpg'  alt={'02'}/>
         <Image m='auto' w='25%' rounded='sm' src='https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/Topwear-Store/Work/5._SS400_QL85_.jpg' alt={'03'}/>    
         <Image m='auto' w='25%' rounded='sm' src='https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/Topwear-Store/Work/3._SS400_QL85_.jpg' alt={'04'}/>  
        </Flex>
       </Box>
           
      }

    </ModalBody>

    <ModalFooter>
      <Button color="white" bg='green'  mr={3}  _hover={{bg:'red'}} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
 </Modal>
     </div>
   )
 }
 
 export default Search;
 