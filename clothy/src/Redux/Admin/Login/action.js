import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionType"



export  const adminLoginAction = (obj)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        return axios.get(`http://localhost:8080/adminlogin`).then(res=>{
         
    //    console.log(obj)
       
    //    console.log(res.data)
        const newData = res.data
        let newfinddata = newData.find(el=>el.email==obj.email && el.password == obj.password)

        console.log("responcedata",newfinddata)

        if(newfinddata){
            dispatch({type:LOGIN_SUCCESS,payload:res.data})
        }
            
        
        
       })
    } catch (error) {
        console.log(error)
        dispatch({type:LOGIN_FAILURE})
    }
     
} 