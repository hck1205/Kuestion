import { combineReducers } from "redux"
import user  from "./userReducer"
import system from "./systemReducer"

export default combineReducers({
    user,
    system
})