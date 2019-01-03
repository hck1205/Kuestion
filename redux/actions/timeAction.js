import axios from "axios";
import { TIME } from "../actionType"

export const getDatetime = () => (
      dispatch => axios.get("/system/time")
            .then(res => dispatch({ type: TIME.FETCH_DATETIME_FULFILLED, payload: res.data }))
            .catch(err => dispatch({ type: TIME.FETCH_DATETIME_REJECTED, payload: err }))
)

export const updateDatetime = datetime => ({
    type: TIME.UPDATE_DATETIME,
    payload: datetime,
})



