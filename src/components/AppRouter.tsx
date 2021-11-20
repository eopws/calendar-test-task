import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { authRoutes, unauthRoutes } from '../routes/';
import { IRoute } from '../types/Router';

const AppRouter: React.FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth);

    let routes: IRoute[] = [];

    if (!isAuth) {
        routes = unauthRoutes;
    } else {
        routes = authRoutes;
    }

    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
