import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter, LoginCheck } from './components';
import { store } from './store';
import MainLayout from './layouts/MainLayout';

import 'antd/dist/antd.css'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <MainLayout>
                <LoginCheck>
                    <AppRouter />
                </LoginCheck>
            </MainLayout>
        </Provider>
    )
}

export default App;
