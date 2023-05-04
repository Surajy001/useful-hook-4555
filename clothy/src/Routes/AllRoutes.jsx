import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import AddToCartPage from "../Pages/AddToCartPage";

const AllRoutes = () => {
  const routes = [
    {path:"/",element:<HomePage/>},
    {path:"/cart-page",element:<AddToCartPage/>},
  ]
  return (
    <Routes>
      {routes.map(item=>(
        <Route path={item.path} element={item.element}/>
      ))}
    </Routes>
  );
};

export default AllRoutes;
