import { LoginPage } from "../pages";
import { IRoute } from "../types/Router"

const unauthRoutes: IRoute[] = [
    {component: LoginPage, path: '/login'},
    {component: LoginPage, path: '*'}, // in case of nothin matches
];

export default unauthRoutes;
