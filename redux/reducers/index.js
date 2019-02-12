import { combineReducers } from "redux"
import user from "./userReducer"
import time from "./timeReducer"
import common from "./commonReducer"

export default combineReducers({
    user,
    time,
    common
})
