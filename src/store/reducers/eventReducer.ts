import { EventAction, EventActionTypes, IState } from "../../types/eventReducer";

const initialState: IState = {
    events: []
};

export function eventReducer(state = initialState, action: EventAction) {
    switch (action.type) {
        case EventActionTypes.SET_EVENTS:
            return {...state, events: action.payload};
        case EventActionTypes.ADD_EVENT:
            return {...state, events: [...state.events, action.payload]};
        default:
            return state;
    }
}
