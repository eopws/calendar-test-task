import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import unauthRoutes from '../routes/unauthRoutes';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    unauthRoutes.map(route =>
                        <Route
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
