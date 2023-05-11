    import axios from "axios";

    import { WOMENS_DELETE_PRODUCT_SUCCESS, WOMENS_GET_PRODUCT_SUCCESS, WOMENS_POST_PRODUCT_SUCCESS, WOMENS_PRODUCT_FAILURE, WOMENS_PRODUCT_REQUEST } from "../actionType";
export const URl = `https://teal-perfect-crow.cyclic.app`;
    export const womenaddProduct = (newProduct)=>(dispatch)=>{
        dispatch({type:WOMENS_PRODUCT_REQUEST});
        axios.post(`${URl}/products`,newProduct).then((res)=>{
            // console.log(res.data);
            dispatch({type:WOMENS_POST_PRODUCT_SUCCESS})
        }).catch((err)=>{
            console.error(err);
            dispatch({type:WOMENS_PRODUCT_FAILURE})
        });
    }

    export const womengetProducts =(paramObj)=> (dispatch)=>{
    dispatch({type:WOMENS_PRODUCT_REQUEST});
    axios.get(`${URl}/products`,paramObj).then((res)=>{
        //console.log("product-wow",res.data);
        let womenFilterData=res.data.filter((item)=>{
    return item.gender === "women";

        })
        // console.log(womenFilterData);
        dispatch({type:WOMENS_GET_PRODUCT_SUCCESS,payload:womenFilterData});
    }).catch((err)=>{
        console.error(err);
        dispatch({type:WOMENS_PRODUCT_FAILURE})
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

    export const womendeleteProduct = (id)=>(dispatch)=>{
        dispatch({type:WOMENS_PRODUCT_REQUEST})
        return axios.delete(`${URl}/products${id}`).then((res)=>{
            // console.log("vik",res.data);

            dispatch({type:WOMENS_DELETE_PRODUCT_SUCCESS});
        }).catch((err)=>{
            console.log(err);
            dispatch({type:WOMENS_PRODUCT_FAILURE})
        })
    };