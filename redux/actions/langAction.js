import { LANG } from "../actionType"

const langPack = {
    EN: {
        freeTalk: {
            menuName: "Free Talk",
            firstGreeting: "First Greeting",
            smallTalk: "Small Talk",
        },
    },
    KO: {
        freeTalk: {
            menuName: "자유게시판",
            firstGreeting: "가입인사",
            smallTalk: "잡담",
        },
    },
}

export const setLanguage = lang => ({
    type: LANG.SET_LANGUAGE,
    payload: langPack[lang],
})