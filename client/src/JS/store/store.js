import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
