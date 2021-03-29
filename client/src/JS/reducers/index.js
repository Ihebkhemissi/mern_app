import { combineReducers } from "redux";
import contactReducer from "./contacts";
import EditReducer from "./edit";

const rootReducer = combineReducers({ contactReducer, EditReducer });
export default rootReducer;
