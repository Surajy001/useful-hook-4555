import { DELETE_PRODUCT_SUCCESS, PRODUCT_TOTAL_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, GET_MEN_PRODUCT_SUCCESS, GET_WOMEN_PRODUCT_SUCCESS } from "../actionType";

  
  const initialState = {
    isLoading: false,
    isError: false,
    totalProducts:0,
    mensProducts: [],
    womensProducts:[]
  };

  export const reducer = (state = initialState, { payload, type }) => {
    switch (type) {
      case PRODUCT_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case PRODUCT_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      case GET_MEN_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          mensProducts: payload,
        };
      }
      case GET_WOMEN_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          womensProducts: payload,
        };
      }
      case POST_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case PATCH_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case DELETE_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        };
      }
      case PRODUCT_TOTAL_SUCCESS:{
        return {
          ...state,
          isLoading:false,
          isError:false,
          totalProducts:payload
        }
      }
      default:
        return state;
    }
  };