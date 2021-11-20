import { AuthAction, AuthActionTypes, IState } from "../../types/authReducer";

const initialState: IState = {
    isAuth: false,
};

export function authReducer(state = initialState, action: AuthAction): IState {
    switch (action.type) {
        case AuthActionTypes.SET_IS_AUTH:
            return {...state, isAuth: action.payload};
        default:
            return state
    }
}
