import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as CartReducer} from '../Redux/CartReducer/reducer'
import { reducer as adminLoginReducer } from "./Admin/Login/reducer";
import {authReducer} from "./AuthReducer/reducer";
import {reducer as adminReducer} from "./Admin/reducer"
import { reducer as menproductReducer } from "./MensPageRedux/reducer";
import { reducer as womenproductReducer  } from "./WomensPageRedux/reducer";
const rootReducer = combineReducers({ 
    authReducer,
    adminLoginReducer,
    CartReducer,
    adminReducer,
    menproductReducer,
    womenproductReducer,
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
