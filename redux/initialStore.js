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
    language: {
        lang: "EN",
        freeTalk: {
            menuName: "Free Talk",
            firstGreeting: "First Greeting",
            smallTalk: "Small Talk",
        }
    },
    common: {
        hasOverlay: false,
    },
}

export default initialStore
