export interface IState {
    isAuth: boolean;
}

export enum AuthActionTypes {
    SET_IS_AUTH="SET_IS_AUTH"
}

export interface SetIsAuthAction {
    type: AuthActionTypes.SET_IS_AUTH;
    payload: boolean;
}

export type AuthAction =
    SetIsAuthAction
 // | Other Actions
