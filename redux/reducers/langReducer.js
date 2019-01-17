import initialState from "../initialState"

export default function reducer(state = initialState.lang, action) {
    switch(action.type) {
        case "SET_MENU_LANG": {
            return {...state, menu: action.payload}
        }
    }
    return state
}