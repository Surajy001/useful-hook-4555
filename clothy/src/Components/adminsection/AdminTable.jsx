import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { URl } from '../../Redux/WomensPageRedux/action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteAdmin, getAdminDetails } from '../../Redux/Admin/action';
import { DeleteIcon } from "@chakra-ui/icons";


const AdminTable = () => {
    
    const dispatcher=useDispatch();
 const [data,setData]=useState([]);
 const {isAuth} = useSelector(store=>store.adminLoginReducer)
// console.log(isAuth)
    const getData = async(url) => {
        return await axios
          .get(url)
          .then((res) => res.data)
          .catch((error) => {
            console.log(error);
          });
      };

      useEffect(()=>{
        getData(`${URl}/AdminDetail`).then((res) => {
      setData(res);

    });
      },[data?.length]);



// const AdminTable = ({data}) => {

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
                    <Th>isActive</Th>
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
                        <Td >{el.isAuth?'Active':'Not Active'}</Td>
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

export default AdminTable