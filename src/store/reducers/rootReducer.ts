import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { eventReducer } from "./eventReducer";

export const rootReducer = combineReducers({
    event: eventReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>
