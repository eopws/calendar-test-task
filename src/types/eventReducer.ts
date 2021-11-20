export interface IEvent {
    type: "success" | "processing" | "error" | "default" | "warning" | undefined;
    content: string;
    date: string;
    user: string; // @TODO: change to IUser
}

export interface IState {
    events: IEvent[];
}

export enum EventActionTypes {
    SET_EVENTS="SET_EVENTS"
}

export interface SetEventsAction {
    type: EventActionTypes.SET_EVENTS;
    payload: IEvent[];
}

export type EventAction =
    SetEventsAction
 // | Other Actions
