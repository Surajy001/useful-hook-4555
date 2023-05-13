
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
    useToast,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addAdmin, getAdminDetails } from '../../Redux/Admin/action';


const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    mobile: "",
    isAuth:false
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
        case "reset": {
            return initialState;
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
    const [confirmPassword, setConfirmPassword] = useState("");
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.password !== confirmPassword || !state.email || !state.name || !state.mobile || !state.gender) {
            toast({
                title: "Please fill required data",
                description: "Please Share required info",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
            });
        } else {
            dispatcher(addAdmin(state)).then(() => {
                dispatcher(getAdminDetails())
                dispatch({ type: "reset" });
                setConfirmPassword("");
                toast({
                    title: "Sign Up Successful.",
                    description: "Welcome to Clothy.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                });
            })
        }
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
                                <FormControl >
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        placeholder="Enter Username Here "
                                        name="name"
                                        onChange={handleChange}
                                        value={state.name}
                                    />
                                </FormControl>

                                <FormControl mt={4} >
                                    <FormLabel>User Email</FormLabel>
                                    <Input
                                        placeholder="Enter Email Here"
                                        name='email'
                                        onChange={handleChange}
                                        value={state.email}
                                    />

                                </FormControl>
                                <FormControl >
                                    <FormLabel>Phone No.</FormLabel>
                                    <Input
                                        placeholder="Enter Phone No. Here"
                                        name='mobile'
                                        onChange={handleChange}
                                        value={state.mobile}
                                    />
                                </FormControl>

                                <FormControl mt={4} >
                                    <FormLabel>Select Gender</FormLabel>
                                    <Select
                                        placeholder="Select Gender"
                                        name='gender'
                                        onChange={handleChange}
                                        value={state.gender}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Select>
                                </FormControl>
                                <FormControl mt={4} >
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        placeholder="Enter Password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={state.password}
                                    />
                                </FormControl>
                                <FormControl mt={4} >
                                    <FormLabel>Confirm Password</FormLabel>
                                    <Input
                                        placeholder="Enter Password"
                                        type="password"
                                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                                        value={confirmPassword}
                                    />
                                </FormControl>

                            </ModalBody>
                            <ModalFooter >
                                <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
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
