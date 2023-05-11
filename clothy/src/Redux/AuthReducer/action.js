import axios from "axios";
import { PATCH_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS,PATCH_SUCCESS_USERDATA } from "../actionType";
import { URl } from "../WomensPageRedux/action";

export const addUserData = (userData, success, navigate, emailExist) => (dispatch) => {
    dispatch({ type: SIGNUP_LOADING })    
    axios.post(`${URl}/UserDetails`, userData)
      .then(() => {
        // console.log(res);
        dispatch({ type: SIGNUP_SUCCESS });
        success();
        navigate("/signin");
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_ERROR });
        // emailExist();
        console.log(err)
      });
  };

  export const patchUserData =(newUserData,id) => (dispatch) => {
    dispatch({ type: SIGNUP_LOADING }) 
    try{
     return axios.patch(`https://teal-perfect-crow.cyclic.app/UserDetails/${id}`, {...newUserData,isAuth:true})
      .then((res) => {
        //  console.log(res.data.isAuth);
         //console.log("data",res.data);
        console.log(res.data)
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
     return axios.patch(`${URl}/UserDetails/${id}`, {...newUserData,isAuth:false})
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