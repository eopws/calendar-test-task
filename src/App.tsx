import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './components';
import { store } from './store';

import 'antd/dist/antd.css'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

export default App;
