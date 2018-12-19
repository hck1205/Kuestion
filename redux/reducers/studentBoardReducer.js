const initialState = {
    boardList: {},
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_STUDENT_BOARD": {
            return { ...state, fetching: true }
        }
        case "FETCH_STUDENT_BOARD_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "FETCH_STUDENT_BOARD_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                userInfo: action.payload
            }
        }
    }

    return state
}