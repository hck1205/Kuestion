import initialStore from "../initialStore"
import { TIME } from "../actionType"


export default function reducer(state = initialStore.time, action) {
    switch(action.type) {
        case TIME.FETCH_DATETIME_PENDING:
            return { ...state, fetching: true }

        case TIME.FETCH_DATETIME_REJECTED:
            return { ...state, fetching: false, error: action.payload }

        case TIME.FETCH_DATETIME_FULFILLED:
            return { ...state, fetching: false, fetched: true, datetime: action.payload }

        case TIME.UPDATE_DATETIME:
            return { datetime: action.payload }

        default:
            return { ...state }
    }
}
