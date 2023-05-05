import { Avatar, Flex, IconButton, Input, InputGroup, InputLeftElement, } from '@chakra-ui/react';
import { FiMenu, FiSearch } from "react-icons/fi";

const Navbar = ({ onclick }) => {

    return (
        <Flex
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg="white"
            _dark={{ bg: "gray.800" }}
            borderBottomWidth="1px"
            color="inherit"
            h="14"
        >
            <IconButton
                display={{ base: "inline-flex", md: "none" }}
                onClick={onclick}
                icon={<FiMenu />}
                size="sm"
            />
            <InputGroup w="96" display={{ base: "none", md: "flex" }}>
                <InputLeftElement color="gray.500" cursor="pointer" _hover={{ color: "blue" }}>
                    <FiSearch />
                </InputLeftElement>
                <Input placeholder="Search for Products..." />
            </InputGroup>

            <Flex align="center">
                <Avatar
                    ml="4"
                    size="sm"
                    name="anubra266"
                    src="https://avatars.githubusercontent.com/u/30869823?v=4"
                    cursor="pointer"
                />
            </Flex>
        </Flex>
    )
}

export default Navbar;