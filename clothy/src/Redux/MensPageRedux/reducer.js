import { MENS_DELETE_PRODUCT_SUCCESS, MENS_GET_PRODUCT_SUCCESS, MENS_POST_PRODUCT_SUCCESS, MENS_PRODUCT_FAILURE, MENS_PRODUCT_REQUEST } from "../actionType"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
}

export const reducer= (state = initialState, { type, payload }) => {
  switch (type) {

    case MENS_PRODUCT_REQUEST:
        return {...state,isLoading:true}
      case MENS_PRODUCT_FAILURE:
        return {...state,isError:true,isLoading:false}
      case MENS_POST_PRODUCT_SUCCESS:
        return {...state,isLoading:false}
      case MENS_GET_PRODUCT_SUCCESS:
        return {...state,isLoading:false,products:payload}   
      case MENS_DELETE_PRODUCT_SUCCESS:
        return {...state,isLoading:false}


  default:
    return state
  }
}
