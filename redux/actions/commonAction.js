import { COMMON } from "../actionType"

export const toggleOverlay = (payload) => ({
    type: COMMON.TOGGLE_OVERLAY,
    payload: payload,
})
