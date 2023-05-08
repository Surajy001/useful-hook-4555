import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../../actionType";

export const addAdmin=(adminData) => async (dispatch) => {
    dispatch({ type: SIGNUP_LOADING });
    await axios
      .post(`http://localhost:8080/AdminDetail`,adminData)
      .then((res) => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: SIGNUP_ERROR });
      });
  };