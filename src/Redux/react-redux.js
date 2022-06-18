import { combineReducers, legacy_createStore } from "redux";
import { CommentReducer } from "./CommentReducer";

let reducers = combineReducers({
    CommentReducer
})

let store = legacy_createStore(reducers)


export default store