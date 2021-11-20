import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';

const LoginCheck: React.FC = ({children}) => {
    const {setIsAuth, setUser} = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth') && localStorage.getItem('user')) {
            const userStringified = localStorage.getItem('user');

            if (typeof userStringified === 'string') {
                const user = JSON.parse(userStringified);

                setIsAuth(true);
                setUser(user);
            }
        }
    }, []);

    return (
        <>{children}</>
    )
}

export default LoginCheck
