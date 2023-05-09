import { ADD_PRODUCT_TO_CART_FOR_NOT_AUTHENTICATED_USER, GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER } from "../actionType";
import { DECREASE_QUANTITY } from "./action";

const initialState = {
    isLoading:false,
    CartQuantity:1,
    CartTotal:0,
    Cart:[],
}
const reducer =(state=initialState,{type,payload})=>{

    switch (type) {
        case ADD_PRODUCT_TO_CART_FOR_NOT_AUTHENTICATED_USER:
            return  {
                ...state,
                Cart:[...state.Cart,payload]
            }
        case GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER:
            console.log(payload)
            return{
                ...state,
                Cart:[...payload]
            }
        default:
            return initialState
    }
}
export {reducer}