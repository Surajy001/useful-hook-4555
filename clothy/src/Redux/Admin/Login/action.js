import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionType"
import { URl } from "../../WomensPageRedux/action"


export const adminLoginAction =(newuser)=> (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        axios.get(`${URl}/AdminDetail`).then(res => {
            const {email , password}=newuser;
            let newUser=res.data.find((item)=> item.email===email && item.password===password)
            //console.log(res.data);
            dispatch({ type: LOGIN_SUCCESS, payload: newUser})
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: LOGIN_FAILURE })
    }
}