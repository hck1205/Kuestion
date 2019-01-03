import { applyMiddleware, createStore} from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "./reducers"

const middlewares = [thunk, promise()]

const logger = createLogger({
    // UPDATE_DATETIME 액션은 Logging에 남기지 않는다.
    predicate: (getState, action) => action.type !== "UPDATE_DATETIME"
});

// 개발 모드일때만 Logger 모듈을 사용한다.
if(process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

export default applyMiddleware(...middlewares)(createStore)(reducer)