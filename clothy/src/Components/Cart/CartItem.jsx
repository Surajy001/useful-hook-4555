import React, { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import style from "./Cart.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Email } from "@mui/icons-material";
function CartItem() {
  const total = useSelector((store) => store.CartReducer.CartTotal);
  const data = [
    {
      id: 1,
      title: "Soho Heritage Harrington Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/93FB0DD4-CC1E-4F10-8A59-975E389BA547?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
      price: 1890.0,
      price_c: 2490.0,
      discount: 24,
      size: "XL",
      color: "Black",
      label: "RELAXED FIT",
      category: "Jacket",
    },
    {
      id: 2,
      title: "Soho Heritage Harrington Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/93FB0DD4-CC1E-4F10-8A59-975E389BA547?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
      price: 1890.0,
      price_c: 2490.0,
      discount: 24,
      size: "XL",
      color: "Black",
      label: "RELAXED FIT",
      category: "Jacket",
    },
    {
      id: 3,
      title: "Soho Heritage Harrington Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/93FB0DD4-CC1E-4F10-8A59-975E389BA547?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
      price: 1890.0,
      price_c: 2490.0,
      discount: 24,
      size: "XL",
      color: "Black",
      label: "RELAXED FIT",
      category: "Jacket",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [Cart, setCart] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const navigate = useNavigate();
  const CheckAuth = () => {
    console.log(isAuth);
    isAuth ? navigate("/payment") : navigate("/signin");
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/UserDetails")
      .then((data) => {
        let CartData = data.data["Deepak"].cart;
        setCart(CartData);
        setFavourite(data.data["Deepak"].wishlist);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(true);
        }, 1500);
      });
  }, []);
  return (
    <Box className={style.Cart_Main_Page}>
      {/* <h1>Welcome {email}</h1>   */}
      <Box className={style.cart_item}>
        {Cart.map((item) => {
          return (
            <CartItemCard
              key={item.id}
              {...item}
              loading={loading}
              favourite={favourite}
              setFavourite={setFavourite}
            />
          );
        })}
      </Box>
      <Box className={style.cart_total}>
        <h1 style={{ color: "gray", fontWeight: "bold", fontSize: "1.1vw" ,margin:'.6rem auto'}}>
          Price Details
        </h1>
        <hr />
        <div className={style.cart_total_detail} style={{width:'90%',margin:'auto',padding:'2rem auto',}}>
          <div className={style.cart_total_details}>
            <Text>Price {data.length} items </Text> <Text>{total}</Text>
          </div>
          <div className={style.cart_total_details}>
            <Text>Discount</Text><Text className={style.discountPrice} style={{ color: "darkgreen" }}>
              -${Math.round(total * 0.4) || 120}{" "}
            </Text>
          </div>
          <div className={style.cart_total_details}>
            <Text>Delivery Charges </Text>{" "}
            <Text style={{ color: "green" }}>Free</Text>
          </div>
          <div className={style.cart_total_details}>
            <Text>Secured Packaging Charge </Text> <Text>$148</Text>
          </div>
          <div className={style.cart_total_details}>
            <Text className="totalAmount">Total Amount </Text>{" "}
            <Text>{total}</Text>
          </div>
          <div className={style.cart_total_details}>
            <Center style={{ color: "green", fontWeight: "bold",margin:'auto'}}>
              You will save ${total - 120} on this order
            </Center>
          </div>
        </div>
        <Button
          className={style.checkout}
          color={"#fff"}
          onClick={CheckAuth}
          background={"dodgerblue"}
          w="50%"
        >
          Checkout ➡
        </Button>
      </Box>
    </Box>
  );
}

export default CartItem;
