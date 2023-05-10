import React, { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import style from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {MdCurrencyRupee} from 'react-icons/md'
import { GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER, PATCH_TOTAL_PRICE } from "../../Redux/actionType";
function CartItem() {
  const [loading, setLoading] = useState(false);
  const [MainCart, setMainCart] = useState([]);

  const [favourite, setFavourite] = useState([]);

  let {Cart,CartTotal} = useSelector(state=>state.CartReducer);

  const {user} = useSelector((store) => store.authReducer);

  const {isAuth} = user;

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const CheckAuth = () => {
    //console.log(isAuth);
    isAuth ? navigate("/payment") : navigate("/signin");
  };
  useEffect(() => {
    //console.log(CartTotal)  
    if(isAuth){
      const {cart} = user;
      setMainCart(cart);
      //console.log(Cart);
    }else{
      axios
      .get("http://localhost:8080/TemporaryUserData")
      .then((data) => {
        let CartData = data.data.cart;
        //console.log(CartData);
        setMainCart(CartData);
        dispatch({type:GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER,payload:CartData})
      })
    }
    setTimeout(() => {
      setLoading(true);
    }, 1500);
    //console.log(CartTotal)
    let total = MainCart.reduce((item,p)=>{
      return item+p.price
    },0)
    //console.log(total)
    dispatch({type:PATCH_TOTAL_PRICE,payload:total})
  }, []);
  return (
    <Box className={style.Cart_Main_Page}>
      {/* <h1>Welcome {email}</h1>   */}
      {/* {console.log(MainCart)} */}
      <Box className={style.cart_item}>
        {MainCart?.map((item) => {
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
            <Text>Price {Cart?.length} items </Text> <Text>{CartTotal}</Text>
          </div>
          <div className={style.cart_total_details}>
            <Text>Discount</Text><Text className={style.discountPrice} style={{ color: "darkgreen" }}>
            <Flex color={'green'} alignItems={'center'}>-{"25%"}</Flex>
            </Text>
          </div>
          <div className={style.cart_total_details}>
            <Text>Delivery Charges </Text>{" "}
            <Text style={{ color: "green" }}>Free</Text>
          </div>
          <div className={style.cart_total_details}>
            <Text>Secured Packaging Charge </Text> <Flex color={'#333'} fontWeight={'bolder'} alignItems={'center'}><MdCurrencyRupee/>{148}</Flex>
          </div>
          <div className={style.cart_total_details}>
            <Text className="totalAmount">Total Amount </Text>{" "}
            <Text>{CartTotal-Math.round(CartTotal * 0.4) || 120 }</Text>
          </div>
          <div className={style.cart_total_details}>
            <Center style={{ color: "green", fontWeight: "bold",margin:'auto'}}>
              You will save -<Flex alignItems={'center'}padding={'0px 3px'}><MdCurrencyRupee/>{Math.abs(CartTotal - CartTotal-Math.round(CartTotal * 0.4) + 148 )}</Flex>  on this order
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
