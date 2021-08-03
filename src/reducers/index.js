import { combineReducers } from "redux";
import AuthReducer from "./auth";
// import Registrasi from "./registrasi.js";

export default combineReducers({
  Auth: AuthReducer,
});
