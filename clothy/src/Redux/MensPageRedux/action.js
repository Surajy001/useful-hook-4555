import axios from "axios";

import { MENS_DELETE_PRODUCT_SUCCESS, MENS_GET_PRODUCT_SUCCESS, MENS_POST_PRODUCT_SUCCESS, MENS_PRODUCT_FAILURE, MENS_PRODUCT_REQUEST } from "../actionType";

export const menaddProduct = (newProduct)=>(dispatch)=>{
    dispatch({type:MENS_PRODUCT_REQUEST});
    axios.post(`http://localhost:8080/products`,newProduct).then((res)=>{
        // console.log(res.data);
        dispatch({type:MENS_POST_PRODUCT_SUCCESS})
    }).catch((err)=>{
        console.error(err);
        dispatch({type:MENS_PRODUCT_FAILURE})
    });
}

export const mengetProducts =(paramObj)=> (dispatch)=>{
dispatch({type:MENS_PRODUCT_REQUEST});
axios.get(`http://localhost:8080/products`,paramObj).then((res)=>{
    console.log("product-wow",res.data);
    let menFilterData=res.data.filter((item)=>{
return item.gender === "men";

    })
    console.log(menFilterData);
    dispatch({type:MENS_GET_PRODUCT_SUCCESS,payload:menFilterData});
}).catch((err)=>{
    console.error(err);
    dispatch({type:MENS_PRODUCT_FAILURE})
});
}

// export const mengetProducts = (dispatch)=>{
//     dispatch({type:MENS_PRODUCT_REQUEST});
//     axios.get(`http://localhost:8080/men`).then((res)=>{
//         // console.log("product-wow",res.data);
//         dispatch({type:MENS_GET_PRODUCT_SUCCESS,payload:res.data});
//         // console.log("RES DARA",res.data);
//     }).catch((err)=>{
//         console.error(err);
//         dispatch({type:MENS_PRODUCT_FAILURE})
//     });
//     }

export const mendeleteProduct = (id)=>(dispatch)=>{
    dispatch({type:MENS_PRODUCT_REQUEST})
    return axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
        // console.log("vik",res.data);

        dispatch({type:MENS_DELETE_PRODUCT_SUCCESS});
    }).catch((err)=>{
        console.log(err);
        dispatch({type:MENS_PRODUCT_FAILURE})
    })
};