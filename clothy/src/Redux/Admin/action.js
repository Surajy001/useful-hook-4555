import axios from "axios";
import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType";


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

export const getProduct = (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
    axios
      .get()
      .then((res) => {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: PRODUCT_FAILURE });
      });
  };

  export const editProduct = (obj, id) => async (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
    await axios
      .patch()
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
      .delete()
      .then(() => {
        dispatch({ type: DELETE_PRODUCT_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: PRODUCT_FAILURE });
      });
  };