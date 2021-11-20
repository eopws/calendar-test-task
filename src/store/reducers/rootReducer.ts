import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { eventReducer } from "./eventReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    event: eventReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>
