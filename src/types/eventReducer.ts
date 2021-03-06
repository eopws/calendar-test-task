import { Moment } from "moment";
import { IUser } from "./userReducer";

export interface IEvent {
    type: "success" | "processing" | "error" | "default" | "warning" | undefined;
    content: string;
    date: Moment;
    user: IUser;
}

export interface IState {
    events: IEvent[];
}

export enum EventActionTypes {
    SET_EVENTS="SET_EVENTS",
    ADD_EVENT="ADD_EVENT"
}

export interface SetEventsAction {
    type: EventActionTypes.SET_EVENTS;
    payload: IEvent[];
}

export interface AddEventAction {
    type: EventActionTypes.ADD_EVENT;
    payload: IEvent;
}

export type EventAction =
    SetEventsAction
    | AddEventAction
