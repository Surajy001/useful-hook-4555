import React, { useState } from "react";
import style from "./Cart.module.css";
import { Box, Button } from "@chakra-ui/react";
import SkeletonCart from "./SkeletonCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FaVestPatches } from "react-icons/fa";
function CartItemCard({
  id,
  title,
  image,
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
  const IncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const DecreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };
  const AddTOFav = (Title) =>{
        // console.log(favourite.find())
        setFavStatus(!favStatus)
        let isFavExist = favourite.find((item)=>item.title === title);
        // console.log(isFavExist);
        

  }
  return !loading ? (
    <SkeletonCart />
  ) : (
    <Box className={style.CartItemContainer}>
        {favStatus?
        <FavoriteIcon onClick={AddTOFav} className={style.Favourite_icon_filled} />:
            <FavoriteBorderOutlinedIcon onClick={AddTOFav} className={style.Favourite_icon_outlined} style={{position:'sticky',left:'13rem',top:'3rem'}}/>
        }
      <div className={style.ImageButton}>
        <img src={image} alt={title} />
        <Button onClick={IncreaseQuantity}>+</Button>
        <Button
          disabled
          style={{ background: "#fff", border: "1px solid", padding: "0 2vw" }}
        >
          {quantity}
        </Button>
        <Button disabled={quantity === 1} onClick={DecreaseQuantity}>
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
        <p>{discount}%</p>
      </div>
      <div className={style.product_details}>
        <h1> 💲{price}</h1>
      </div>
      <div className={style.product_button}>
        <Button>Delete</Button>
      </div>
    </Box>
  );
}

export default CartItemCard;
