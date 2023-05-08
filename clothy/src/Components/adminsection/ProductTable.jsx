import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,Image
} from '@chakra-ui/react';
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct';

const ProductTable = ({data}) => {
    return (
        <Table>
            <Thead >
                <Tr borderTop={"1px solid #CBD5E0"}>
                    <Th>Product Image</Th>
                    <Th>Product Name</Th>
                    <Th>Brand</Th>
                    <Th>Category</Th>
                    <Th>Price</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>

                </Tr>
            </Thead>
            <Tbody >
                {data.map((el,index)=>{
                    return <Tr key={index}>
                    <Td  w={"15%"}><Image src={el.images[0]} alt="Product Image" width={"40%"} boxShadow={"md"} border={"1px solid#CBD5E0"}/></Td>
                    <Td >{el.title} </Td>
                    <Td >{el.brand} </Td>
                    <Td > {el.category}</Td>
                    <Td  w={"10%"}> {`₹ ${el.price}`}</Td>
                    <Td>
                        <EditProduct {...el}/>
                    </Td>
                    <Td>
                        <button>
                            <DeleteIcon boxSize={6} />
                        </button>
                    </Td>
                </Tr>
                })}
                
            </Tbody>
        </Table>
    )
}

export default ProductTable;