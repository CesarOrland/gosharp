import { types } from "../../../../redux/constans";


const initialState = {
    login: {},
    fetchingLogin: false
  };

  type Action = {
    type: any,
    payload?: any
}

export const login = (state = initialState, action: Action) => {
switch(action.type){
    case types.UPDATE_ISLOGIN:
        return
        default:
            return state
}
}