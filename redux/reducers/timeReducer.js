import initialState from "../initialState"
import { TIME } from "../actionType"


export default function reducer(state = initialState.time, action) {
    switch(action.type) {
        case TIME.FETCH_DATETIME_PENDING:
            return { ...state, fetching: true }

        case TIME.FETCH_DATETIME_REJECTED:
            return { ...state, fetching: false, error: action.payload }

        case TIME.FETCH_DATETIME_FULFILLED:
            return { ...state, fetching: false, fetched: true, datetime: action.payload }

        case TIME.UPDATE_DATETIME:
            return { datetime: action.payload }
    }
    return state
}