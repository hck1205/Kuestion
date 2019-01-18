import initialStore from "../initialStore"

export default function reducer(state = initialStore.lang, action) {
    switch(action.type) {
        case "SET_MENU_LANG": {
            return {...state, menu: action.payload}
        }
    }
    return state
}
