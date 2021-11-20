import { CalendarPage } from "../pages";
import { IRoute } from "../types/Router"

const authRoutes: IRoute[] = [
    {component: CalendarPage, path: '/home'},
    {component: CalendarPage, path: '*'}
];

export default authRoutes;
