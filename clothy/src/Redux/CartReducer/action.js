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
            // console.log(res.data.cart);
            dispatch({type:GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER,payload:res.data.cart})
        })
    }catch(error){
        console.log(error)
    }
}
export const GetAuthenticateUserCartData =(dispatch)=>{
    try{
        return axios(`${URl}/UserDetails`).then((res)=>{
            // console.log(res.data.cart);
            /* The line `// dispatch({type:GetAuthenticateUserCartData,payload:res.data.cart})` is
            commented out, which means it is not being executed. However, it appears to be an action
            that dispatches a type `GetAuthenticateUserCartData` with a payload of `res.data.cart`.
            This action is likely used to get the cart data for an authenticated user. */
            // dispatch({type:GetAuthenticateUserCartData,payload:res.data.cart})
        })
    }catch(error){
        console.log(error)
    }
}
export const PostTemporaryDataOfUser = (Cart)=>async(dispatch)=>{
    // console.log(Cart)
    try {
        return await axios.post(`${URl}/TemporaryUserData`, {
               cart:[...Cart],
             })
             .then((response) => {
               /* `// console.log(response.data);` is a commented out line of code that is not being
               executed. It is likely used for debugging purposes to log the response data from the API
               call to the console. */
            //    console.log(response.data);

                //  dispatch({type:ADD_PRODUCT_TO_CART_FOR_NOT_AUTHENTICATED_USER,payload:response.data});
             })
             
         } catch(error) {
           console.log(error);
         }
}

export const DeleteProductFromCart = (cart)=>async(dispatch)=>{
    try{
        return await axios.post(`${URl}/TemporaryUserData`,{
            cart:[...cart]
        }).then((res)=>{
            // console.log(res.data.cart)
            let DeleteAfterData = [...res.data.cart];
            dispatch({type:GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER,payload:DeleteAfterData})
        })
    }catch(err){
        console.log(err);
    }
}