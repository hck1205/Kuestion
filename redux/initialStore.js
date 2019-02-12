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
    common: {
        hasOverlay: false,
    },
}

export default initialStore
