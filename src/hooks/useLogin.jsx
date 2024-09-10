import { useEffect, useState } from 'react';
import { getUserData } from '../services/auth.services';

export const useLogin = () => {
    const [userLogin, setUserLogin] = useState();

    useEffect(() => {
        const token = localStorage.getItem('tokenFirebase');
        if (token) {
            setUserLogin(getUserData(token));
        } else {
            window.location.href = '/';
        }
    }, []);

    return userLogin;
};
