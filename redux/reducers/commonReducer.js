import initialStore from "../initialStore"
import { COMMON } from "../actionType"

export default function reducer(state = initialStore.common, action) {
    switch(action.type) {

        case COMMON.CHANGE_MENU:
            return { ...state, activeMenu: action.payload }

        case COMMON.TOGGLE_OVERLAY:
            return { ...state, hasOverlay: action.payload }

        default:
            return { ...state }
    }
}
