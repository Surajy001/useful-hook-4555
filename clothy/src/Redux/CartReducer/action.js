import axios from "axios";
import { ADD_PRODUCT_TO_CART_FOR_NOT_AUTHENTICATED_USER, GET_CART_PRODUCTS_FOR_AUTHENTICATE_USER, GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER } from "../actionType";
import { URl } from "../WomensPageRedux/action";
export const AddtoCartData = (cartData)=>(dispatch)=>{
    try{
        return axios.patch(`${URl}/TemporaryUserData`,cartData).then((res)=>{
            //console.log(res.data);
            dispatch({type:ADD_PRODUCT_TO_CART_FOR_NOT_AUTHENTICATED_USER,payload:res.data})
        })
    }catch(error){
        console.log(error)
    }
}
export const GetTemperaryCartData =(dispatch)=>{
    try{
        return axios(`${URl}/TemporaryUserData`).then((res)=>{
            //console.log(res.data.cart);
            dispatch({type:GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER,payload:res.data.cart})
        })
    }catch(error){
        console.log(error)
    }
}

export const PostTemporaryDataOfUser = async(Cart,dataCart)=>async(dispatch)=>{
    try {
        return await axios.post(`${URl}/TemporaryUserData`, {
               cart: [...Cart, dataCart],
             })
             .then((response) => {
               //console.log(response.data);
             })
             
         } catch(error) {
           console.log(error);
         }
}