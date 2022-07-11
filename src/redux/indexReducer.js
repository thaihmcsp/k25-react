import { combineReducers } from "redux";
import { productReducer } from "./product/productReducer";
import { userReducer } from "./user/productReducer";

export const indexReducer = combineReducers({
    product: productReducer,
    user: userReducer
});