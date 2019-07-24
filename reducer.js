import { combineReducers } from "redux";
import comments from "./comments";

export default (app = combineReducers({
    comments
}));
