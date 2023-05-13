import axios from "axios";
import { ADMIN_DATA, DELETE_PRODUCT_SUCCESS, GET_MEN_PRODUCT_SUCCESS, GET_ORDERED_PRODUCT_SUCCESS, GET_USER_DETAIL_SUCCESS, GET_WOMEN_PRODUCT_SUCCESS, LOGIN_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_TOTAL_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, } from "../actionType";
import { URl } from "../WomensPageRedux/action";
import AdminLogin from "../../Pages/AdminLogin";

export const addProduct = (productData) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .post(`${URl}/products`, productData)
    .then(() => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getMenProduct = (pgno) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${URl}/products?gender=men&_limit=10&_page=${pgno}`)
    .then((res) => {
      dispatch({ type: PRODUCT_TOTAL_SUCCESS, payload: res.headers["x-total-count"] })
      dispatch({ type: GET_MEN_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
export const getWomenProduct = (pgno) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${URl}/products?gender=women&_limit=10&_page=${pgno}`)
    .then((res) => {
      dispatch({ type: PRODUCT_TOTAL_SUCCESS, payload: res.headers["x-total-count"] })
      dispatch({ type: GET_WOMEN_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};


export const editProduct = (productData, id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .patch(`${URl}/products/${id}`, productData)
    .then(() => {
      dispatch({ type: PATCH_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .delete(`${URl}/products/${id}`)
    .then(() => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getOrderedProduct = (pgno) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${URl}/UserDetails?_limit=10&_page=${pgno}`)
    .then((res) => {
      dispatch({ type: PRODUCT_TOTAL_SUCCESS, payload: res.headers["x-total-count"] })
      dispatch({ type: GET_ORDERED_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getUserDetails = (pgno) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${URl}/UserDetails?_limit=10&_page=${pgno}`)
    .then((res) => {
      dispatch({ type: PRODUCT_TOTAL_SUCCESS, payload: res.headers["x-total-count"] })
      dispatch({ type: GET_USER_DETAIL_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
export const addAdmin = (adminData) => async (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  await axios
    .post(`${URl}/AdminDetail`, adminData)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: SIGNUP_ERROR });
    });
};
export const getAdminData = async(dispatch)=>{
  return await axios(`${URl}/AdminDetail`).then((res)=>{
    console.log(res.data)
    dispatch({type:LOGIN_SUCCESS,payload:res.data})
  }).catch((err)=>{
    console.log(err.message)
  })
} 
export const logoutadmin = (adminDetail)=>async(dispatch)=>{
    return axios.patch(`${URl}/AdminDetail/${adminDetail?.id}`,{
          ...adminDetail,
          isAuth:false
    }).then((res)=>{
      console.log(res.data)
      dispatch({type:ADMIN_DATA,payload:res.data});
    }).catch((err)=>{
      console.log(err);
    })
}