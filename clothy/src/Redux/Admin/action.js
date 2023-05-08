import axios from "axios";
import { DELETE_PRODUCT_SUCCESS, GET_MEN_PRODUCT_SUCCESS, GET_WOMEN_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_TOTAL_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../actionType";


export const addProduct = (productData) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .post()
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
    .get(`http://localhost:8080/products?gender=men&_limit=10&_page=${pgno}`)
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
    .get(`http://localhost:8080/products?gender=women&_limit=10&_page=${pgno}`)
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
    .patch(` http://localhost:8080/products/${id}`,productData)
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
    .delete(`http://localhost:8080/products/${id}`)
    .then(() => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

