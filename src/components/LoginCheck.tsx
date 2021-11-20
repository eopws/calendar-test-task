import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';

const LoginCheck: React.FC = ({children}) => {
    const {setIsAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, []);

    return (
        <>{children}</>
    )
}

export default LoginCheck
