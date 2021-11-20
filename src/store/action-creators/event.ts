import { EventAction, EventActionTypes, IEvent } from "../../types/eventReducer";

export const setEvents = (payload: IEvent[]): EventAction => {
    return {type: EventActionTypes.SET_EVENTS, payload};
};
