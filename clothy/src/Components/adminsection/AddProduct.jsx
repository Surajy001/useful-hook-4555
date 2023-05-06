
import React from 'react'
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

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button
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
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Product Image</FormLabel>
                  <Input
                    placeholder="Enter URL for Image"
                    name="image"
                  />
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel>Product Price</FormLabel>
                  <Input
                    placeholder="Enter Price"
                    name="price"
                    type="number"
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    placeholder="Select Gender"
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </Select>
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Category</FormLabel>
                  <Select
                    placeholder="Select Category"
                  >
                    <option value="tshirt">T Shirt</option>
                    <option value="shirt">Shirt</option>
                    <option value="shorts">Jacket</option>
                    <option value="jeans">Jeans</option>
                  </Select>
                </FormControl>
              </ModalBody>
              <ModalFooter >
                <Button colorScheme='blue' mr={3}>
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
