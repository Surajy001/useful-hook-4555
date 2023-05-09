import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr, Select, Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const OrderTable = () => {

    const [status, setStatus] = useState(false);

    const data = useSelector((store) => {
        return store.adminReducer.orderedProducts;
    })

    return (
        <Table>
            <Thead >
                <Tr borderTop={"1px solid #CBD5E0"}>
                    <Th>PRODUCT NAME</Th>
                    <Th>PRODUCT IMAGE</Th>
                    <Th>CUS. NAME</Th>
                    <Th>CUS. EMAIL</Th>
                    <Th>QUAN.</Th>
                    <Th>PRICE</Th>
                    <Th>STATUS</Th>
                    <Th>MAINTAIN STATUS</Th>

                </Tr>
            </Thead>
            <Tbody >
                {data.map((el, ind) => (
                    el.placedOrder.map((e, i) => (
                        <Tr key={i}>
                            <Td>{e.title}</Td>
                            <Td w={"12%"}><img src={e.image} alt="Product Image" border={"1px solid#CBD5E0"} width={"90%"} /></Td>
                            <Td>{el.name}</Td>
                            <Td>{el.email}</Td>
                            <Td>{e.quantity}</Td>
                            <Td>{e.price}</Td>
                            <Td><Text>{status ? "Delivered" : "Shipped"}</Text></Td>
                            <Td>
                                <Select placeholder='Toggle Status' fontSize={"smaller"}>
                                    <option value={"shipped"}>Shipped</option>
                                    <option value={"delivered"}>Delivered</option>
                                </Select>
                            </Td>
                        </Tr>
                    ))
                ))}
            </Tbody>
        </Table>
    )
}

export default OrderTable;