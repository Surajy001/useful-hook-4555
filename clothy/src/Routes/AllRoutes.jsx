import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import AddToCartPage from "../Pages/AddToCartPage";
import Payment from "../Pages/Payment";
import AdminLogin from "../Pages/AdminLogin";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Pages/adminsection/Dashboard";
import SingleProductPage from "../Pages/SingleProductPage";
import MenProductPage from "../Pages/adminsection/MenProduct";
import WomenProductPage from "../Pages/adminsection/WomenProduct";
import AdminsPage from "../Pages/adminsection/AdminsPage";
import { MensPage } from "../Pages/MensPage";
import { WomensPage } from "../Pages/WomensPage";

import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import PrivateRoute from "./PrivateRoute";



const AllRoutes = () => {
  
const PageRoutes=[
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/product/:id",
    element: <SingleProductPage/>,
  },
  {
    path: "/menproducts",
    element: <MensPage/>,
  },
  {
    path: "/womenproducts",
    element: <WomensPage />,
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>,
  },
]

  return (
    <>
    <Routes> 
      
      {PageRoutes.map((ele, key) => (
          <Route key={key} path={ele.path} element={<> <Navbar /> {ele.element} <Footer /> </>  } />
        ))}

      <Route path="/add-to-cart" element={<PrivateRoute> <Navbar /> <AddToCartPage/> <Footer /> </PrivateRoute> }/>

      <Route path="/admin-dashboard" element={<Dashboard/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      <Route path="/admin-admins" element={<AdminsPage/>} />
      <Route path="/admin-men-products" element={<MenProductPage/>}/>
      <Route path="/admin-women-products" element={<WomenProductPage/>}/>

    </Routes>
</>

  );
};

export default AllRoutes;
