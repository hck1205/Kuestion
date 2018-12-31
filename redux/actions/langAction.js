const langPack = {
    EN: {
        k_culture: {
            menuName : "K-Culture",
            k_drama : "K-Drama",
            k_pop : "K-POP",
        }
    },
    KO: {
        k_culture: {
            menuName : "한류문화",
            k_drama : "한국드라마",
            k_pop : "케이팝",
        }
    },
}

export const setLanguage = lang => ({
    type: "SET_LANGUAGE",
    payload: langPack[lang],
})