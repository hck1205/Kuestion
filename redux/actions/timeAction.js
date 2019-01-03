import axios from "axios";

export const getDatetime = () => (
      dispatch => axios.get("/system/time")
            .then(res => dispatch({ type: "FETCH_DATETIME_FULFILLED", payload: res.data }))
            .catch(err => dispatch({ type: "FETCH_DATETIME_REJECTED", payload: err }))
)

export const updateDatetime = datetime => ({
    type: "UPDATE_DATETIME",
    payload: datetime,
})



