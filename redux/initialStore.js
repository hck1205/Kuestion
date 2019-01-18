const initialStore = {
    time: {
        datetime: 0,
        fetching: false,
        fetched: false,
        error: null
    },
    user: {
        id: null,
        name: null,
        age: null,
        fetching: false,
        fetched: false,
        error: null
    },
    lang: {
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

export default initialStore
