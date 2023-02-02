import { combineReducers } from "redux";
import customerReducer from './customerReducer';
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
  customer: customerReducer,
  product: productReducer,
  cart: cartReducer
});

export default rootReducer;