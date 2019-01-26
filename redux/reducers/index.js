import { combineReducers } from "redux"
import user from "./userReducer"
import time from "./timeReducer"
import language from "./languageReducer"
import common from "./commonReducer"

export default combineReducers({
    user,
    time,
    language,
    common
})
