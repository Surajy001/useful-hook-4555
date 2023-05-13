import { ADMIN_DATA, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionType";

 
 const init = {
    isLoading : false,
    isError:false,
    admindata:[],
    admin:{},
   //  isAuth:false
   //  isAuth:localStorage.getItem("loginIsAuth")||false,

 }
 export const reducer = (state = init,{type,payload})=>{
      switch(type){
        case LOGIN_REQUEST:{
         return {
            ...state,
            isLoading:true,
         }
        }
        case LOGIN_FAILURE:{
         return{
            ...state,
            isLoading:false,
            isError:true,
            isAuth:false
         }
        }
        case LOGIN_SUCCESS:{
         return{
            ...state,
            isLoading:false,
            isError:false,
            admindata:payload,
         }
        }
        case ADMIN_DATA:{
         return {
            ...state,
               admin:{...payload}
         }
        }
        default:
            return state;
      }
 }