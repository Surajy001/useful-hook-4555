import { ADD_PRODUCT_TO_CART_FOR_NOT_AUTHENTICATED_USER, ADD_PRODUCT_TO_WISH_LIST, GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER, PATCH_TOTAL_PRICE } from "../actionType";
import { DECREASE_QUANTITY } from "./action";

const initialState = {
    isLoading:false,
    CartQuantity:1,
    CartTotal:0,
    Cart:[],
    WishList:[],
}
const reducer =(state=initialState,{type,payload})=>{

    switch (type) {
        case ADD_PRODUCT_TO_CART_FOR_NOT_AUTHENTICATED_USER:
            return  {
                ...state,
                Cart:[...state.Cart,payload]
            }
        case GET_CART_PRODUCTS_FOR_NOT_AUTHENTICATE_USER:
            //console.log(payload)
            return{
                ...state,
                Cart:[...payload]
            }
        case PATCH_TOTAL_PRICE:
            return {
                ...state,
                CartTotal:payload
            }
        case ADD_PRODUCT_TO_WISH_LIST:
            //console.log(payload)
            return{
                ...state,
                WishList:[...state.WishList,payload]
            }
        default:
            return initialState
    }
}
export {reducer}