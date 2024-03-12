import { combineReducers } from "redux"
import { login } from "../../screens/Login/redux/reducer"

const appReducer = combineReducers({
    login
})

const rootReducer = (state : any, action: any) => {
    return appReducer(state, action)
}

export default rootReducer