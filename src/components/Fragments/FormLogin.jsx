import React, { useState } from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { toast } from 'react-toastify';

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

    const hanldeLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                formLogin.email,
                formLogin.password
            );
            toast.success('User Logged In Seccessfully', {
                position: 'top-center',
                autoClose: 2000,
            });
            setTimeout(() => {
                window.location.href = '/welcome';
            }, 1500);
        } catch (error) {
            toast.error(error.message, { position: 'bottom-center', autoClose: 2000 });
        }
    };

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
