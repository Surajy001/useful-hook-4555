import axios from "axios";
import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../actionType";
import { Email } from "@mui/icons-material";

export const addUserData =
  (userData, success, navigate, emailExist) => (dispatch) => {
    dispatch({ type: SIGNUP_LOADING });
    try{
      axios.post("http://localhost:8080/UserDetails", {...userData})
      // axios.post("http://localhost:8080/UserDetails", userData)
      .then((data) => {
        // console.log(res);
        console.log(data)
        dispatch({ type: SIGNUP_SUCCESS });
        success();
        navigate("/signin");
      })
    }catch(err){
      dispatch({ type: SIGNUP_ERROR });
      console.log(err.message)
    }
  };
