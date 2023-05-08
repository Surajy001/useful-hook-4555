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
        let CartData = data.data;
        // let CartData = data.data.filter(item=>{
          console.log(data)
        //   return item.email === 'deepakyad'
        // })
        setCart(data.data['Suraj123@gmail.com'].cart);
        // setFavourite(data.data["Deepak"].wishlist);
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
        {Cart?.map((item) => {
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
            <Text>Price {Cart.length} items </Text> <Text>{total}</Text>
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
          fontWeight={'bold'}
          background={"dodgerblue"}
          w="60%"
        >
          Checkout ➡
        </Button>
      </Box>
    </Box>
  );
}

export default CartItem;
