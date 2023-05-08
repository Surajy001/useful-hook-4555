import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionType";

 
 const init = {
    isLoading : false,
    isError:false,
    admindata:[],
    isAuth:false

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
            isError:true

         }
        }
        case LOGIN_SUCCESS:{
         return{
            ...state,
            isLoading:false,
            isError:false,
            admindata:[...payload],
            isAuth:true,
         }
        }
        default:
            return state;
      }
 }