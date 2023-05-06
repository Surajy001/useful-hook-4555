import axios from "axios";
import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../actionType";

export const addUserData =
  (userData, success, navigate, emailExist) => (dispatch) => {
    dispatch({ type: SIGNUP_LOADING });
    axios.post("http://localhost:8080/login", userData)
      .then(() => {
        // console.log(res);
        dispatch({ type: SIGNUP_SUCCESS });
        success();
        navigate("/signin");
      })
      .catch(() => {
        dispatch({ type: SIGNUP_ERROR });
        // emailExist();
      });
  };
