import { combineReducers } from "redux"
import user  from "./userReducer"
import studentBoard  from "./studentBoardReducer"

export default combineReducers({
    user,
    studentBoard
})