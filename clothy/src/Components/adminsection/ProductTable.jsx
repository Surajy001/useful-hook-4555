import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import { DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';

const ProductTable = () => {
    return (
        <Table>
            {/* <Thead>
                <Tr>
                    <Th>Product Image</Th>
                    <Th>Product Name</Th>
                    <Th>Brand</Th>
                    <Th>Category</Th>
                    <Th>Price</Th>
                    <Th>Discounted Price</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>

                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td><img src={ } alt="" /></Td>
                    <Td>{ } </Td>
                    <Td>{ } </Td>
                    <Td> { }</Td>
                    <Td> { }</Td>
                    <Td> {`₹ ${}`}</Td>
                    <Td>
                        <Link to={`${}`}><button onClick={() => handleEditProduct()}>
                            <ExternalLinkIcon boxSize={6} />
                        </button>
                        </Link>
                    </Td>
                    <Td>
                        <button onClick={() => handleDeleteProduct()}>
                            <DeleteIcon boxSize={6} />
                        </button>
                    </Td>
                </Tr>
            </Tbody> */}
        </Table>
    )
}

export default ProductTable;