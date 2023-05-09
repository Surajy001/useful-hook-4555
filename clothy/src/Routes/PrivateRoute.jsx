import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const user=useSelector((store)=>store.authReducer.user);
//console.log(user.isAuth);

const isAuth=useSelector((store)=>store.authReducer.isAuth);
// console.log(isAuth);

const location=useLocation();
    
  return user.isAuth? (children):(<Navigate to={"/signin"} state={location.pathname} replace={true} />)
};

export default PrivateRoute;


// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   if (!localStorage.getItem('name')) {
//     return <Navigate to="/signin" />;
//   }

//   return children;
// };

// export default PrivateRoute;