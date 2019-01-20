import initialStore from "../initialStore"

export default function reducer(state = initialStore.language, action) {
    switch(action.type) {
        case "SET_MENU_LANG": {
            return {...state, lang: action.payload}
        }
    }
    return state
}
