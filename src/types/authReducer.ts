import { IUser } from "./userReducer";

export interface IState {
    isAuth: boolean;
    user: IUser | null;
}

export enum AuthActionTypes {
    SET_IS_AUTH="SET_IS_AUTH",
    SET_USER="SET_USER"
}

export interface SetIsAuthAction {
    type: AuthActionTypes.SET_IS_AUTH;
    payload: boolean;
}

export interface SetUserAction {
    type: AuthActionTypes.SET_USER;
    payload: IUser | null;
}

export type AuthAction =
    SetIsAuthAction
    | SetUserAction
