import axios from "axios";
import { PATCH_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../actionType";

export const addUserData =
  (userData, success, navigate, emailExist) => (dispatch) => {
    dispatch({ type: SIGNUP_LOADING })    
    axios.post("http://localhost:8080/UserDetails", userData)
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

  export const patchUserData =(newUserData,id) => (dispatch) => {
    dispatch({ type: SIGNUP_LOADING }) 
    try{
      axios.patch(`http://localhost:8080/UserDetails/${id}`, {...newUserData,isAuth:true})
      .then((res) => {
         console.log(res.data.isAuth);
        
        dispatch({ type: PATCH_SUCCESS, payload:res.data.isAuth });
      })
    }catch(err){
      console.log(err);
      dispatch({type: SIGNUP_ERROR})
    }
       
  };
