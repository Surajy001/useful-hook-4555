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
import { MensPage } from "../Pages/MensPage";
import { WomensPage } from "../Pages/WomensPage";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import PrivateRoute from "./PrivateRoute";
import Winter from "../Pages/OtherPages/Winter";
import About from "../Pages/OtherPages/About";
import Sales from "../Pages/OtherPages/Sale";
import WishList from "../Pages/OtherPages/WhishLIst";
import OrderPage from "../Pages/adminsection/OrderPage";
import UserPage from "../Pages/adminsection/UserPage";
import AdminPrivateRoute from "./AdminPrivateRoute";

const AllRoutes = () => {
  const PageRoutes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/product/:id",
      element: <SingleProductPage />,
    },
    {
      path: "/menproducts",
      element: <MensPage />,
    },
    {
      path: "/womenproducts",
      element: <WomensPage />,
    },
    {
      path: "/winter",
      element: <Winter />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/sale",
      element: <Sales />,
    },
    {
      path: "/wishList",
      element: <WishList />,
    },
    {
      path: "/add-to-cart",
      element: <AddToCartPage />,
    },
    {
      path: "*",
      element: <h1>404 Page Not Found</h1>,
    },
  ];
  const AdminPath = [
    {
      path: "/admin-dashboard",
      element: <Dashboard />,
    },
    {
      path: "/admin-admins",
      element: <UserPage />,
    },
    {
      path: "/admin-men-products",
      element: <MenProductPage />,
    },
    {
      path: "/admin-women-products",
      element: <WomenProductPage />,
    },
    {},
    {
      path: "/admin-order-products",
      element: <OrderPage />,
    },
  ];

  return (
    <>
      <Routes>
        {PageRoutes.map((ele, key) => (
          <Route
            key={key}
            path={ele.path}
            element={
              <>
                {" "}
                <Navbar /> {ele.element} <Footer />{" "}
              </>
            }
          />
        ))}

        <Route
          path="/payment"
          element={
            <PrivateRoute>
              {" "}
              <Navbar /> <Payment /> <Footer />{" "}
            </PrivateRoute>
          }
        />

        <Route path="/admin-login" element={<AdminLogin />} />

        {AdminPath.map((ele, key) => (
          <Route
            key={key}
            path={ele.path}
            element={
              <>
                <AdminPrivateRoute>{ele.element}</AdminPrivateRoute>
              </>
            }
          />
        ))}

        {/* <Route path="/admin-admins" element={<UserPage/>} />
      <Route path="/admin-men-products" element={<MenProductPage/>}/>
      <Route path="/admin-women-products" element={<WomenProductPage/>}/>
      <Route path="/admin-order-products" element={<OrderPage/>}/> */}
      </Routes>
    </>
  );
};

export default AllRoutes;
