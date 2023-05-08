import { LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  user: {},
  //changed from array to object becox user is only one logged
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // for signup
    case SIGNUP_LOADING:
      return { ...state, isLoading: true };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false};
      case LOGIN_SUCCESS:
        console.log(payload)
      return { ...state, isLoading: false, user:{...payload}};
      //made changes for getting userData
    case SIGNUP_ERROR:
      return { ...state, isLoading: false, isError: true };

    //default case
    default:
      return state;
  }
};
