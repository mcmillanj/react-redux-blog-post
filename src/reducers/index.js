import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import UserReducers from "./UserReducers";


export default combineReducers({
    posts: PostReducer,
    users: UserReducers
});