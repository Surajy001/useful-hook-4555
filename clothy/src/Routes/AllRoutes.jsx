import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
<<<<<<< HEAD
import AddToCartPage from "../Pages/AddToCartPage";
=======
import Payment from "../Pages/Payment";
import AdminPage from "../Pages/AdminPage";

>>>>>>> 98b4b3006a4ddd00c88f7a7a907bd2be54512762

const AllRoutes = () => {
  const routes = [
    {path:"/",element:<HomePage/>},
    {path:"/cart-page",element:<AddToCartPage/>},
  ]
  return (
    <Routes>
<<<<<<< HEAD
      {routes.map(item=>(
        <Route path={item.path} element={item.element}/>
      ))}
=======
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/payment"} element={<Payment />} />
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="*" element={<h1>404 Page Not Found</h1>}/>

>>>>>>> 98b4b3006a4ddd00c88f7a7a907bd2be54512762
    </Routes>
  );
};

export default AllRoutes;
