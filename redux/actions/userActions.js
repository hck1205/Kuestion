import axios from "axios"

// export function fetchUser() {
//     return {
//         type: "FETCH_USER_FULFILLED",
//         payload: {
//             name: "Will",
//             age: 35,
//         }
//     }
// }

export function fetchUser() {
    return dispatch => {
        axios.get("/user/all")
            .then((res) => {
                dispatch({ type: "FETCH_USER_FULFILLED", payload: res.data})
            })
            .catch((err) => {
                dispatch({ type: "FETCH_USER_REJECTED", payload: err})
            })
    }
}

// export function setUserName(name) {
//     return {
//         type: "SET_USER_NAME",
//         payload: name,
//     }
// }
//
// export function setUserAge(age) {
//     return {
//         type: "SET_USER_AGE",
//         payload: age,
//     }
// }