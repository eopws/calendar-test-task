import { EventAction, EventActionTypes, IEvent } from "../../types/eventReducer";

export const setEvents = (payload: IEvent[]): EventAction => {
    return {type: EventActionTypes.SET_EVENTS, payload};
};

export const addEvent = (payload: IEvent): EventAction => {
    return {type: EventActionTypes.ADD_EVENT, payload};
}
