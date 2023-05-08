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
import { MensPage } from "../Pages/MensPage";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";

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
    path: "/add-to-cart",
    element: <AddToCartPage/>,
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

      <Route path="/admin-dashboard" element={<Dashboard/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      
    </Routes>
</>

  );
};

export default AllRoutes;
