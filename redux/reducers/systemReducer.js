const initialState = {
    menu: {
        k_culture: {
            menuName : "",
            k_drama : "",
            k_pop : "",
        },
        fetching: false,
        fetched: false,
        error: null
    },
    datetime: {
        date: "",
        time: "",
        day: "",
        fetching: false,
        fetched: false,
        error: null
    },
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "SET_MENU_LANG": {
            return {
                ...state,
                menu: action.payload
            }
        }

        // get system date time
        case "FETCH_DATETIME": {
            return {
                ...state,
                datetime: {
                    ...state.datetime,
                    fetching: true,
                },
            }
        }
        case "FETCH_DATETIME_REJECTED": {
            return {
                ...state,
                datetime: {
                    ...state.datetime,
                    fetching: false,
                    error: action.payload
                },
            }
        }
        case "FETCH_DATETIME_FULFILLED": {
            return {
                ...state,
                datetime: {
                    ...state.datetime,
                    fetching: false,
                    fetched: true,
                    date: action.payload.date,
                    day: action.payload.day,
                    time: action.payload.time,
                },
            }
        }
    }


    return state
}