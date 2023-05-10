
import React, { useReducer } from 'react'
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
import { addProduct, getMenProduct, getWomenProduct } from '../../Redux/Admin/action';


const AddProduct = () => {

  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "title": {
        return {
          ...state,
          title: payload,
        }
      }
      case "description": {
        return {
          ...state,
          description: payload,
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
      case "rating": {
        return {
          ...state,
          rating: +payload,
        }
      }
      case "gender": {
        return {
          ...state,
          gender: payload,
        }
      }
      case "images": {
        return {
          ...state,
          images:  [state.image1, state.image2, state.image3, state.image4],
        }
      }
      case "image1": {
        return {
          ...state,
          image1:payload,
        }
      }
      case "image2": {
        return {
          ...state,
          image2: payload,
        }
      }
      case "image3": {
        return {
          ...state,
          image3: payload,
        }
      }
      case "image4": {
        return {
          ...state,
          image4: payload,
        }
      }
      case "reset": {
        return initialState;
      }
      default:
        return state;
    }
  }

  let initialState = {
    title: "", description: "", category: "", brand: "", price: "", rating: "", gender: "", images: [], image1: "", image2: "", image3: "", image4: "",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatcher = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatcher(addProduct({
      title: state.title, description: state.description, category: state.category, brand: state.brand, price: state.price, gender: state.gender, rating: state.rating, images: state.images
    })).then(() => {
      dispatcher(getMenProduct());
      dispatcher(getWomenProduct());
      dispatch({ type: "reset" });
    })
  }

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value })
    dispatch({ type: "images" })
  }

  return (
    <div>
      <Button
        boxShadow={"md"}
        border={"1px solid grey"}
        size={"sm"}
        onClick={() => {
          onOpen()
        }}
      >
        Add Product
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) '
        >
          <ModalContent>
            <ModalHeader>Add Product</ModalHeader>
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
                <FormControl isRequired>
                  <FormLabel>Product Description</FormLabel>
                  <Input
                    placeholder="Enter Product Description"
                    name="description"
                    onChange={handleChange}
                    value={state.description}
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
                    <option value="jacket">Jacket</option>
                    <option value="jeans">Jeans</option>
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
                  <FormLabel>Product Rating</FormLabel>
                  <Input
                    type="number"
                    name="rating"
                    placeholder='Enter Product Rating'
                    onChange={handleChange}
                    value={state.rating}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Gender</FormLabel>
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
                  <FormLabel>Product Image </FormLabel>
                  <Input
                    placeholder="Enter URL for Image 1"
                    name="image1"
                    onChange={handleChange}
                    value={state.image1}
                  />
                  <Input
                    placeholder="Enter URL for Image 2"
                    name="image2"
                    onChange={handleChange}
                    value={state.image2}
                    mt={2}
                  />
                  <Input
                    placeholder="Enter URL for Image 3"
                    name="image3"
                    onChange={handleChange}
                    value={state.image3}
                    mt={2}
                  />
                  <Input
                    placeholder="Enter URL for Image 4"
                    name="image4"
                    onChange={handleChange}
                    value={state.image4}
                    mt={2}
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

export default AddProduct
