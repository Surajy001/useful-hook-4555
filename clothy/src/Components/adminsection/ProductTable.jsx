import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,Image
} from '@chakra-ui/react';
import { DeleteIcon } from "@chakra-ui/icons";
import EditProduct from './EditProduct';
import { deleteProduct, getMenProduct, getWomenProduct } from '../../Redux/Admin/action';
import { useDispatch } from 'react-redux';

const ProductTable = ({data}) => {

    const dispatcher=useDispatch();
    return (
        <Table>
            <Thead >
                <Tr borderTop={"1px solid #CBD5E0"}>
                    <Th>PRODUCT IMAGE</Th>
                    <Th>PRODUCT NAME</Th>
                    <Th>BRAND</Th>
                    <Th>CATEGORY</Th>
                    <Th>PRICE</Th>
                    <Th>EDIT</Th>
                    <Th>DELETE</Th>
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
                        <button onClick={()=>{dispatcher(deleteProduct(el.id)).then((res)=>{
                            dispatcher(getMenProduct());
                            dispatcher(getWomenProduct());
                        })}}>
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