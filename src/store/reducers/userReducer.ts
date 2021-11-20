import { IState } from "../../types/userReducer";

const initialState: IState = {
    users: [
        {username: 'xareyli', password: '123456'},
        {username: 'john', password: 'spiderman'},
    ]
};

export function userReducer(state = initialState, action: any) {
    return initialState;
}
