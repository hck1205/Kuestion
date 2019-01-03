const initialState = {
    datetime: "",
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        // get system date time
        case "FETCH_DATETIME":
            return { ...state, fetching: true }

        case "FETCH_DATETIME_REJECTED":
            return { ...state, fetching: false, error: action.payload }

        case "FETCH_DATETIME_FULFILLED":
            return { ...state, fetching: false, fetched: true, datetime: action.payload }

        case "UPDATE_DATETIME":
            return { datetime: action.payload }
    }
    return state
}