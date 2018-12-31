const initialState = {
    menu: {
        k_culture: {
            menuName: "",
            k_drama: "",
            k_pop: "",
        },
        fetching: false,
        fetched: false,
        error: null
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "SET_MENU_LANG": {
            return {...state, menu: action.payload}
        }
    }
    return state
}