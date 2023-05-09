import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const UserTable = () => {

    const data = useSelector((store) => {
        return store.adminReducer.userDetails;
    })

    return (
        <Table>
            <Thead >
                <Tr borderTop={"1px solid #CBD5E0"}>
                    <Th>SR.No</Th>
                    <Th>USER IMAGE</Th>
                    <Th>USER NAME</Th>
                    <Th>USER Email</Th>
                    <Th>PHONE NO.</Th>
                    <Th>GENDER</Th>
                </Tr>
            </Thead>
            <Tbody >
                {data.map((el, i) => (
                    <Tr key={el.id}>
                        <Td>{el.id}</Td>
                        <Td w={"12%"}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BaxevbHsera-I9b57I40phEGm3caprMeLA"} alt="User Image" border={"1px solid#CBD5E0"} width={"90%"} /></Td>
                        <Td>{el.name}</Td>
                        <Td>{el.email}</Td>
                        <Td>{el.mobile}</Td>
                        <Td>{el.gender}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default UserTable;