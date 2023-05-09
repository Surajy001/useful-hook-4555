import { PATCH_SUCCESS, PATCH_SUCCESS_USERDATA, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  user:{},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_LOADING:
      return { ...state, isLoading: true };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false };
    case SIGNUP_ERROR:
      return { ...state, isLoading: false, isError: true };
    case PATCH_SUCCESS:
      return {...state, isLoading:false, user:payload};
    default:
      return state;
  }
};
