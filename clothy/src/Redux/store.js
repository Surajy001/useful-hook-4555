import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as adminLoginReducer } from "./Admin/Login/reducer";
import {authReducer} from "./AuthReducer/reducer";

const rootReducer = combineReducers({ 
    authReducer,
    adminLoginReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
