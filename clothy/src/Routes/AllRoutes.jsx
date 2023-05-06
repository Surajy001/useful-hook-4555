import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import AddToCartPage from "../Pages/AddToCartPage";
import Payment from "../Pages/Payment";
import AdminPage from "../Pages/AdminPage";
import AdminLogin from "../Pages/AdminLogin";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Pages/adminsection/Dashboard";

const AllRoutes = () => {
  
  return (
    <Routes>
      <Route path={"/"} element={<HomePage/>} />
      <Route path={"/signin"} element={<Signin/>} />
      <Route path={"/signup"} element={<Signup/>} />
      <Route path="/add-to-cart" element={<AddToCartPage/>}></Route>
      <Route path={"/payment"} element={<Payment />} />
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/admin-dashboard" element={<Dashboard/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      <Route path={"*"} element={<h1>404 Page Not Found</h1>}/>

    </Routes>
  );
};

export default AllRoutes;
