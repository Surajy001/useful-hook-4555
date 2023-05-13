import { useSlider } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function AdminPrivateRoute({children}) {

    const {admin} = useSelector(store=>store.adminLoginReducer);
    const {isAuth} = admin;
    console.log(admin);
  return !isAuth?<Navigate to="/admin-login"/>:children;
}

export default AdminPrivateRoute