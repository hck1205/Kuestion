import { COMMON } from "../actionType"

export const toggleOverlay = (payload) => ({
    type: COMMON.TOGGLE_OVERLAY,
    payload: payload,
})

export const changeMenu = (payload) => ({
    type: COMMON.CHANGE_MENU,
    payload: payload
})