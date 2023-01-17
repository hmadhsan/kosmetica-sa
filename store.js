import { combineReducers } from "redux";

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";
import { getAllKosmeticsReduxers } from "./src/reducers/kosmeticReducer";

const finalReducer = combineReducers({
    getAllKosmeticsReduxers: getAllKosmeticsReduxers
})

const initialState = {};
const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))