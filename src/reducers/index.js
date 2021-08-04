import { combineReducers } from "redux";
import AuthReducer from "./auth";
import ProductList from "./productlist";

export default combineReducers({
  Auth: AuthReducer,
  Product: ProductList,
});
