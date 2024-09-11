import React, { useEffect, useState } from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button/Button';
import { toast } from 'react-toastify';
import { login } from '../../services/auth.services';

const FormLogin = () => {
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    });

    const onLoginChange = (e) => {
        const { name, value } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: value,
        });
    };

    useEffect(() => {
        const token = localStorage.getItem('tokenFirebase');
        if (token) {
            window.location.href = '/welcome';
        } else {
            return;
        }
    }, []);

    const hanldeLogin = async (e) => {
        e.preventDefault();
        try {
            if (formLogin.email.trim() === '' || formLogin.password.trim() === '') {
                toast.error('Please fill in all input fields', {
                    position: 'bottom-center',
                    autoClose: 2000,
                });
            } else {
                login(formLogin.email, formLogin.password, (status, res) => {
                    if (status) {
                        const token = res;
                        localStorage.setItem('tokenFirebase', token);
                        toast.success('User Logged In Successfully', {
                            position: 'top-center',
                            autoClose: 2000,
                        });
                        setTimeout(() => {
                            window.location.href = '/welcome';
                        }, 3000);
                    }
                });
            }
        } catch (error) {
            toast.error(error.message, { position: 'bottom-center', autoClose: 2000 });
        }
    };

    useEffect(() => {
        document.title = 'Login';
    }, []);

    return (
        <form onSubmit={hanldeLogin}>
            <InputForm
                onChange={onLoginChange}
                type='email'
                label='Email'
                name='email'
                id='email'
                placeholder='example@mail.com'
            />
            <InputForm
                onChange={onLoginChange}
                type='password'
                label='Password'
                name='password'
                id='password'
                placeholder='*****'
            />
            <Button type='submit' className='w-full text-white'>
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
