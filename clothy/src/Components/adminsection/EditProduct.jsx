
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
import { ExternalLinkIcon } from "@chakra-ui/icons";


// const initialState = {
//     title: "",
//     category: "",
//     brand: "",
//     price: "",
//     images:[],
// };

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "title": {
            return {
                ...state,
                title: payload,
            }
        }
        case "category": {
            return {
                ...state,
                category: payload,
            }
        }
        case "brand": {
            return {
                ...state,
                brand: payload,
            }
        }
        case "price": {
            return {
                ...state,
                price: +payload,
            }
        }
        case "images": {
            return {
                ...state,
                images: payload,
            }
        }
        default:
            return state;
    }
}

const EditProduct = ({ id, title, category, brand, price, images }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatcher = useDispatch();
    const [state, dispatch] = useReducer(reducer,
        { title, category, brand, price, images });
    const [image1, setImage1] = useState(images[0]);
    const [image2, setImage2] = useState(images[1]);
    const [image3, setImage3] = useState(images[2]);
    const [image4, setImage4] = useState(images[3]);
    const [arrayImages, setArrayImages] = useState([]);

    const handleSubmit = (e, id) => {
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
                <ExternalLinkIcon boxSize={6} />
            </button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) '
                >
                    <ModalContent>
                        <ModalHeader>Edit Product</ModalHeader>
                        <ModalCloseButton />
                        <form>
                            <ModalBody>
                                <FormControl isRequired>
                                    <FormLabel>Product Title</FormLabel>
                                    <Input
                                        placeholder="Enter Product Title"
                                        name="title"
                                        onChange={handleChange}
                                        value={state.title}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Category</FormLabel>
                                    <Select
                                        placeholder="Select Category"
                                        name='category'
                                        onChange={handleChange}
                                        value={state.category}
                                    >
                                        <option value="tshirt">T Shirt</option>
                                        <option value="shirt">Shirt</option>
                                        <option value="kurta">Kurta</option>
                                        <option value="sports-wear">Sports Wear</option>
                                    </Select>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Product Brand</FormLabel>
                                    <Input
                                        placeholder="Enter Product Brand"
                                        name="brand"
                                        onChange={handleChange}
                                        value={state.brand}
                                    />
                                </FormControl>
                                <FormControl mt={4} isRequired>
                                    <FormLabel>Product Price</FormLabel>
                                    <Input
                                        placeholder="Enter Price"
                                        name="price"
                                        type="number"
                                        onChange={handleChange}
                                        value={state.price}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Product Image </FormLabel>
                                    <Input
                                        placeholder="Enter URL for Image 1"
                                        name="image1"
                                        onChange={(e) => {
                                            setImage1(e.target.value);
                                        }}
                                        value={image1}
                                    />
                                    <Input
                                        placeholder="Enter URL for Image 2"
                                        name="image2"
                                        onChange={(e) => {
                                            setImage2(e.target.value);
                                        }}
                                        value={image2}
                                        mt={2}
                                    />
                                    <Input
                                        placeholder="Enter URL for Image 3"
                                        name="image3"
                                        onChange={(e) => {
                                            setImage3(e.target.value);
                                        }}
                                        value={image3}
                                        mt={2}
                                    />
                                    <Input
                                        placeholder="Enter URL for Image 4"
                                        name="image4"
                                        onChange={(e) => {
                                            setImage4(e.target.value);
                                        }}
                                        value={image4}
                                        mt={2}
                                    />
                                </FormControl>

                            </ModalBody>
                            <ModalFooter >
                                <Button colorScheme='blue' mr={3} onClick={(e) => {
                                    handleSubmit(e, id)
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

export default EditProduct;
