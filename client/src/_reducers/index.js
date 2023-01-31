import { combineReducers } from "redux";
import customerReducer from './customerReducer';
import productReducer from "./productReducer";
const rootReducer = combineReducers({
  customer: customerReducer,
  product: productReducer
});

export default rootReducer;