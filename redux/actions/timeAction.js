import axios from "axios";
import axiosConfig from "./axiosConfig"
import { TIME } from "../actionType"


export const updateDatetime = datetime => ({
    type: TIME.UPDATE_DATETIME,
    payload: datetime,
})

export const fetchDatetime = () => ({
    type: TIME.FETCH_DATETIME,
    payload: axios(axiosConfig("GET", "/system/time")).then(res => res.data)
})

