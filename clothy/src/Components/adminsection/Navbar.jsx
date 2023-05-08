import { Avatar, Flex, IconButton, Input, InputGroup, InputLeftElement, Text, } from '@chakra-ui/react';
import { FiMenu, FiSearch } from "react-icons/fi";

const Navbar = ({ onclick }) => {

    return (
        <Flex
            align="center"
            justify={"space-between"}
            px={5}
            py={10}
            w="full"
            bg="white"
            _dark={{ bg: "gray.800" }}
            borderBottom="2px solid #CBD5E0"
            color="inherit"
            h="14"
            boxShadow={"md"}
        >
            <IconButton
                display={{ base: "inline-flex", md: "none" }}
                onClick={onclick}
                icon={<FiMenu />}
                size="sm"
            />
            <Flex display={{ base: "none", md: "flex" }} w={"95%"} justifyContent={"center"}>
            <InputGroup  display={{ base: "none", md: "flex" }} w={"30%"} >
                <InputLeftElement color="gray.500" cursor="pointer" _hover={{ color: "blue" }}>
                    <FiSearch />
                </InputLeftElement>
                <Input placeholder="Search for Products..." border={"1px solid grey"}/>
            </InputGroup>
            </Flex>

            <Flex align="center" w={"8%"}  justifyContent={"space-between"}  border={"1px solid"}>
                <Avatar
                    size="sm"
                    name={``}
                    cursor="pointer"
                />
                <Text></Text>
            </Flex>
            
        </Flex>
    )
}

export default Navbar;