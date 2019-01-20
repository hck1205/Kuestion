import { combineReducers } from "redux"
import user from "./userReducer"
import time from "./timeReducer"
import lang from "./langReducer"
import common from "./commonReducer"

export default combineReducers({
    user,
    time,
    lang,
    common
})