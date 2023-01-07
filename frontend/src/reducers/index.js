import mentorConnectionReducer from "./mentorConnection";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isConnect: mentorConnectionReducer
});

export default rootReducer;