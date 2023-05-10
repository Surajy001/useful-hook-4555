import React, { useState } from "react";
import style from "./Cart.module.css";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import SkeletonCart from "./SkeletonCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FaVestPatches } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {BsCurrencyRupee} from 'react-icons/bs'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { MdCurrencyRupee } from "react-icons/md";
function CartItemCard({
  id,
  title,
  image,
  images,
  price,
  price_c,
  discount,
  size,
  color,
  lable,
  category,
  loading,
  favourite,
  setFavrourite,
  rating
}) {
  const [quantity, setQuantity] = useState(1);
  const [favStatus,setFavStatus] = useState(false);
  const dispatch = useDispatch();

  const CartTotal = useSelector(store=>store.CartReducer.CartTotal)
  const AddTOFav = (Title) =>{
        // console.log(favourite.find())
        setFavStatus(!favStatus)
        let isFavExist = favourite.find((item)=>item.title === title);
        //console.log(isFavExist);
  }
  const DecreaseQuantity =()=>{
        setQuantity(prev=>prev-1)
      }
const IncreaseQuantity = () =>{
      setQuantity(prev=>prev+1)
}
  return !loading ? (
    <SkeletonCart />
  ) : (
    <>
    <Box className={style.CartItemContainer}>
        {favStatus?
        <FavoriteIcon onClick={AddTOFav} className={style.Favourite_icon_filled} />:
            <FavoriteBorderOutlinedIcon onClick={AddTOFav} className={style.Favourite_icon_outlined} />
        }
      <div className={style.ImageButton}>
        {/* {console.log(images)} */}
        <Image src={image||images[0]} alt={title} />
        <Button onClick={IncreaseQuantity}  disabled={quantity===5} className={style.Inc}>+</Button>
        <Button 
          style={{  padding: "0 2vw" }}
        >
          {quantity}
        </Button>
        <Button disabled={quantity <= 1} className={style.Dec} onClick={DecreaseQuantity} >
          -
        </Button>
      </div>
      <div className={style.product_details}>
        <h2>{title}</h2>
        <div className={style.details}>
          <span>{category}</span>
          <span>{color}</span>
          <span>{size}</span>
          <span>{lable}</span>
        </div>
        <p className={style.discount} >{discount||25}% off 🤯.🚀Hurry up!! 🛒 Offer ending soon... </p>
      </div>
      <div className={style.product_details}>
      <Flex color={'#757575'} fontWeight={'bolder'} padding={'auto 1rem '} fontSize={'1.2rem'} alignItems={'center'}><MdCurrencyRupee/> <Text fontSize={'1.3rem'} >{price}</Text></Flex>
      </div>
      <div className={style.product_button}>
        <Button>Delete</Button>
      </div>
    </Box>
    </>
  );
}

export default CartItemCard;
