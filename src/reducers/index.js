import { combineReducers } from "redux";
import counterReducer from "./counterReducer"

const AppReducer = combineReducers({
    CounterReducer:counterReducer,
});

export default AppReducer;