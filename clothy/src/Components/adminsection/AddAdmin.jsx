
import React, { useReducer, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Select,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';


const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    mobile: "",
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "name": {
            return {
                ...state,
                name: payload,
            }
        }
        case "email": {
            return {
                ...state,
                email: payload,
            }
        }
        case "mobile": {
            return {
                ...state,
                mobile: payload,
            }
        }
        case "password": {
            return {
                ...state,
                password: payload,
            }
        }
        case "gender": {
            return {
                ...state,
                gender: payload,
            }
        }
        default:
            return state;
    }
}

const AddAdmin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatcher = useDispatch();
    const [state, dispatch] = useReducer(reducer,
        initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatcher(addProduct(state));
        console.log(state)
    }

    const handleChange = (e) => {
        dispatch({ type: e.target.name, payload: e.target.value })
    }

    return (
        <div>
            <button onClick={() => onOpen()}>
                <Button
                    boxShadow={"md"}
                    border={"1px solid grey"}
                    size={"sm"}
                    onClick={() => {
                        onOpen()
                    }}
                >
                    Add Admin
                </Button>
            </button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) '
                >
                    <ModalContent>
                        <ModalHeader>Add Admin</ModalHeader>
                        <ModalCloseButton />
                        <form>
                            <ModalBody>
                                <FormControl isRequired>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        placeholder="Enter Username Here "
                                        name="name"
                                        onChange={handleChange}
                                        value={state.name}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>User Email</FormLabel>
                                    <Input
                                        placeholder="Enter Email Here"
                                        name='email'
                                        onChange={handleChange}
                                        value={state.email}
                                    />

                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Phone No.</FormLabel>
                                    <Input
                                        placeholder="Enter Phone No. Here"
                                        name='Mobile'
                                        onChange={handleChange}
                                        value={state.mobile}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Select Gender</FormLabel>
                                    <Select
                                        placeholder="Select Gender"
                                        name='gender'
                                        onChange={handleChange}
                                        value={state.gender}
                                    >
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                    </Select>
                                </FormControl>
                                <FormControl mt={4} isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        placeholder="Enter Password"
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                        value={state.password}
                                    />
                                </FormControl>

                            </ModalBody>
                            <ModalFooter >
                                <Button colorScheme='blue' mr={3} onClick={() => {
                                    handleSubmit()
                                }}>
                                    Add
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </div >
    )
}

export default AddAdmin;
