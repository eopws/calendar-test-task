import { AuthAction, AuthActionTypes } from "../../types/authReducer"

export const setIsAuth = (payload: boolean): AuthAction => {
    return {type: AuthActionTypes.SET_IS_AUTH, payload}
}
