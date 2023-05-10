import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionType"



export const adminLoginAction = (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        axios.get(`http://localhost:8080/AdminDetail`).then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: LOGIN_FAILURE })
    }
} 