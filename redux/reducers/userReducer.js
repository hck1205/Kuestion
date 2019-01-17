import initialState from "../initialState"

export default function reducer(state = initialState.user, action) {

    switch(action.type) {
        case "FETCH_USER": {
            return { ...state, fetching: true }
        }
        case "FETCH_USER_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "FETCH_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        }
    }

    return state
}