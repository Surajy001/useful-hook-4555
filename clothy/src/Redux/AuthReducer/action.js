import axios from "axios";
import { PATCH_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS,PATCH_SUCCESS_USERDATA } from "../actionType";

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
     return axios.patch(`http://localhost:8080/UserDetails/${id}`, {...newUserData,isAuth:true})
      .then((res) => {
        //  console.log(res.data.isAuth);
         console.log("data",res.data);

          dispatch({ type: PATCH_SUCCESS, payload:res.data });
        })
    }catch(err){
      console.log(err);
      dispatch({type: SIGNUP_ERROR})
    }
       
  };


  export const patchlogoutUser =(newUserData,id) => (dispatch) => {
    dispatch({ type: SIGNUP_LOADING }) 
    try{
     return axios.patch(`http://localhost:8080/UserDetails/${id}`, {...newUserData,isAuth:false})
      .then((res) => {
        //  console.log(res.data.isAuth);
        //  console.log("data",res.data);
        
        dispatch({ type: PATCH_SUCCESS, payload:res.data.isAuth });
        localStorage.setItem("userDetails",JSON.stringify(res.data))
        dispatch({ type: PATCH_SUCCESS_USERDATA, payload:res.data });
      })
    }catch(err){
      console.log(err);
      dispatch({type: SIGNUP_ERROR})
    }
       
  }; 