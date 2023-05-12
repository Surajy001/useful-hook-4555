import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteAdmin, getAdminDetails } from '../../Redux/Admin/action';
import { DeleteIcon } from "@chakra-ui/icons";


const AdminTable = ({data}) => {
    const dispatcher=useDispatch();

    return (
        <Table>
            <Thead >
                <Tr borderTop={"1px solid #CBD5E0"}>
                    <Th>SR.No</Th>
                    <Th>ADMIN IMAGE</Th>
                    <Th>ADMIN NAME</Th>
                    <Th>ADMIN EMAIL</Th>
                    <Th>PHONE NO.</Th>
                    <Th>GENDER</Th>
                    <Th>DELETE</Th>
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
                        <Td>
                        <button onClick={()=>{dispatcher(deleteAdmin(el.id)).then((res)=>{
                            dispatcher(getAdminDetails());
                        })}}>
                            <DeleteIcon boxSize={6} />
                        </button>
                    </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default AdminTable;