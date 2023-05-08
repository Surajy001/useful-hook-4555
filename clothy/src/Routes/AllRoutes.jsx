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
import { WomensPage } from "../Pages/WomensPage";

const AllRoutes = () => {
  
const adminRoutes=[
  {
    path: "/admin-dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/admin-login",
    element: <AdminLogin/>,
  },
]

  return (
    <Routes>
      {adminRoutes.map((ele, key) => (
          <Route key={key} path={ele.path} element={ele.element} />
        ))}
      <Route path={"/"} element={<HomePage/>} />
      <Route path={"/signin"} element={<Signin/>} />
      <Route path={"/signup"} element={<Signup/>} />
      <Route path="/add-to-cart" element={<AddToCartPage/>}></Route>
      <Route path={"/payment"} element={<Payment />} />
      <Route path="/admin-dashboard" element={<Dashboard/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      <Route path="/product/:id" element={<SingleProductPage/>}/>

      <Route path="/menproducts" element={<MensPage/>}/>
      <Route path="/womenproducts" element={<WomensPage />}/>

      <Route path={"*"} element={<h1>404 Page Not Found</h1>}/>

    </Routes>
  );
};

export default AllRoutes;
