import { AuthAction, AuthActionTypes } from "../../types/authReducer"
import { IUser } from "../../types/userReducer"

export const setIsAuth = (payload: boolean): AuthAction => {
    return {type: AuthActionTypes.SET_IS_AUTH, payload}
}

export const setUser = (payload: IUser | null): AuthAction => {
    return {type: AuthActionTypes.SET_USER, payload}
}
