import { AuthAction, AuthActionTypes, IState } from "../../types/authReducer";

const initialState: IState = {
    isAuth: false,
    user: null
};

export function authReducer(state = initialState, action: AuthAction): IState {
    switch (action.type) {
        case AuthActionTypes.SET_IS_AUTH:
            if (action.payload === true) {
                localStorage.setItem('auth', 'true');
            } else {
                localStorage.removeItem('auth');
            }

            return {...state, isAuth: action.payload};
        case AuthActionTypes.SET_USER:
            if (action.payload !== null) {
                localStorage.setItem('user', JSON.stringify(action.payload));
            } else {
                localStorage.removeItem('user');
            }

            return {...state, user: action.payload};
        default:
            return state
    }
}
