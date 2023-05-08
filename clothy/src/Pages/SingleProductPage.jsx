import { Image, Box, Flex, Text, Grid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
    const [data, setData] = useState({})
    const { id } = useParams()

    const singlePage = () => {
        axios.get(`http://localhost:8080/men/${id}`).then(res => {
            
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        singlePage()
    }, [])

    const { images, brand, category, desc, gender, discountPercentage, price } = data;

    return (
        <Flex direction={{ base: "column", md: "row" }} mx={{ base: "4", md: "12" }} my={{ base: "4", md: "12" }} border={"1px solid red"}>
            {/* <Flex direction={{ base: "column", md: "row" }} justify="space-between" w={{ base: "full", md: "50%" }}> */}
                <Grid border={"1px solid gray"}  w={{ base: "full", md: "50%" }} justify="space-between" align="center"> 
                    <Box border={"1px solid teal"} w={{ base: "33%", md: "50%" }}>
                        {images ? <Image src={images[1]} alt="" boxSize={{ base: "full", md: "100%" }} /> : <Text>Loading...</Text>}
                    </Box>
                    <Box w={{ base: "33%", md: "50%" }}>
                        {images ? <Image src={images[2]} alt="" boxSize={{ base: "full", md: "100%" }} /> : <Text>Loading...</Text>}
                    </Box>
                    <Box w={{ base: "33%", md: "50%" }}>
                        {images ? <Image src={images[3]} alt="" boxSize={{ base: "full", md: "100%" }} /> : <Text>Loading...</Text>}
                    </Box>
                {/* </Flex> */}
            </Grid>
                <Box border={"1px solid black"} w={{ base: "full", md: "50%" }}>
                    <Image src={images ? images[0] : ''} alt="" boxSize={{ base: "full", md: "100%" }} />
                </Box>
            <Flex direction="column" justify="space-between" mx={{ base: "4", md: "12" }} my={{ base: "4", md: "12" }}>
                <Box>
                    <Text fontSize="xl" fontWeight="bold" mb="2">{brand}</Text>
                    <Text mb="2">{desc}</Text>
                    <Text mb="2">Category: {category}</Text>
                    <Text mb="2">Gender: {gender}</Text>
                </Box>
                <Box>
                    <Text fontSize="2xl" fontWeight="bold" mb="2">₹{price}</Text>
                    {discountPercentage &&
                        <Box bg="green.500" py="1" px="2" borderRadius="md" mb="2" maxW="max-content">
                            <Text color="white" fontSize="sm">{discountPercentage}% Discount</Text>
                        </Box>
                    }
                </Box>
            </Flex>
        </Flex>
    )
}

export default SingleProductPage
