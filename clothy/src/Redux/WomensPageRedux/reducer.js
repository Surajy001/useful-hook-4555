import {
  WOMENS_DELETE_PRODUCT_SUCCESS,
  WOMENS_GET_PRODUCT_SUCCESS,
  WOMENS_POST_PRODUCT_SUCCESS,
  WOMENS_PRODUCT_FAILURE,
  WOMENS_PRODUCT_REQUEST,
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WOMENS_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case WOMENS_PRODUCT_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case WOMENS_POST_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case WOMENS_GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case WOMENS_DELETE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
