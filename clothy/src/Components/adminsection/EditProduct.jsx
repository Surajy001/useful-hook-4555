
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
import { editProduct, getMenProduct, getWomenProduct } from '../../Redux/Admin/action';




const EditProduct = ({ id, title, category, brand, price, images }) => {


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
                    images: [state.images1, state.images2, state.images3, state.images4]
                }
            }
            case "images1": {
                return {
                    ...state,
                    images1: payload,
                }
            }
            case "images2": {
                return {
                    ...state,
                    images2: payload,
                }
            }
            case "images3": {
                return {
                    ...state,
                    images3: payload,
                }
            }
            case "images4": {
                return {
                    ...state,
                    images4: payload,
                }
            }
            case "reset": {
                return initialState;
            }
            default:
                return state;
        }
    }


    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatcher = useDispatch();
    let initialState = { title, category, brand, price, images, images1: images[0], images2: images[1], images3: images[2], images4: images[3] };
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleSubmit = (e, id) => {
        e.preventDefault();
        dispatcher(editProduct({
            title: state.title, category: state.category,
            brand: state.brand,
            price: state.price,
            images: state.images
        }, id)).then(()=>{
           dispatcher(getMenProduct());
           dispatcher(getWomenProduct());
        })
        ;
    }

    const handleChange = (e) => {
        dispatch({ type: e.target.name, payload: e.target.value })
        dispatch({ type: "images" })
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
                                        name="images1"
                                        onChange={handleChange}
                                        value={state.images1}
                                    />
                                    <Input
                                        placeholder="Enter URL for Image 2"
                                        name="images2"
                                        onChange={handleChange}
                                        value={state.images2}
                                        mt={2}
                                    />
                                    <Input
                                        placeholder="Enter URL for Image 3"
                                        name="images3"
                                        onChange={handleChange}
                                        value={state.images3}
                                        mt={2}
                                    />
                                    <Input
                                        placeholder="Enter URL for Image 4"
                                        name="images4"
                                        onChange={handleChange}
                                        value={state.images4}
                                        mt={2}
                                    />
                                </FormControl>

                            </ModalBody>
                            <ModalFooter >
                                <Button colorScheme='blue' mr={3} onClick={(e) => {
                                    onClose()
                                    handleSubmit(e, id)
                                }}>
                                    Add
                                </Button>
                                <Button onClick={() => {
                                    dispatch({ type: "reset" });
                                    onClose();
                                }}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </div >
    )
}

export default EditProduct;
