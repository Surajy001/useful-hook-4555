import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import AddToCartPage from "../Pages/AddToCartPage";

import Payment from "../Pages/Payment";
import AdminPage from "../Pages/AdminPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/payment"} element={<Payment />} />
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="*" element={<h1>404 Page Not Found</h1>}/>
    </Routes>
  );
};

export default AllRoutes;
