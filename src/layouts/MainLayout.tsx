import React from 'react'
import { Button, Menu } from 'antd'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const MainLayout: React.FC = ({children}) => {
    const {isAuth} = useTypedSelector(state => state.auth);
    const {setIsAuth} = useActions();

    function onLogout() {
        setIsAuth(false);
    }

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="logout">
                    {
                        isAuth
                        &&
                        <Button onClick={onLogout}>Logout</Button>
                    }
                </Menu.Item>
            </Menu>

            {children}
        </div>
    )
}

export default MainLayout
