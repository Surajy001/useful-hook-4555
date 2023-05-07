import { DECREASE_QUANTITY } from "./action";

const initialState = {
    // isLoading:false,
    // CartQuantity:1,
    // CartTotal:0,
    // CartItem:[],
     "email":"deepak123@gmail.com",
      "password":"1234567890",
      "isAuth":false,

}
const reducer =(state=initialState,{type,payload})=>{

    switch (type) {
        case DECREASE_QUANTITY:
            return 9
        default:
            return initialState
    }
}
export {reducer}