import axios from "axios"
import { ADMIN_DATA, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionType"
import { URl } from "../../WomensPageRedux/action"


export const adminLoginAction = async(dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
      return await axios.get(`${URl}/AdminDetail`).then(res => {
            // const {email , password}=newuser;
            // let newUser=res.data.find((item)=> item.email===email && item.password===password)
            // console.log(res.data);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data})
            // if(newUser){
            //     // dispatch(AdminLoginPatch(user))
            // }
            // console.log(newUser)
        //   axios.patch(`${URl}/AdminDetail/${newUser.id}`,{
        //       ...newUser,isAuth:true
        //     })
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: LOGIN_FAILURE })
    }
}
export const AdminLoginPatch =(newuser)=> (dispatch) => {
    console.log(newuser)
    dispatch({ type: LOGIN_REQUEST })
    try {
        axios.patch(`${URl}/AdminDetail/${newuser.id}`,{
            ...newuser,
            isAuth:true
        }).then(res => {
            // console.log(res.data)
            dispatch({ type: ADMIN_DATA, payload:res.data })
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: LOGIN_FAILURE })
    }
}