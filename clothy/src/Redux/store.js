import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as CartReducer} from '../Redux/CartReducer/reducer'
const rootReducer = combineReducers({CartReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
