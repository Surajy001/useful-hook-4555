import { DECREASE_QUANTITY } from "./action";

const initialState = {
    isLoading:false,
    CartQuantity:1,
    CartTotal:0,
    CartItem:[],
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