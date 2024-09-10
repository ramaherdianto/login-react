import React, { useEffect, useState } from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';

const FormRegister = () => {
    const [formRegister, setFormRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleOnRegisterChange = (e) => {
        const { name, value } = e.target;
        setFormRegister({
            ...formRegister,
            [name]: value,
        });
    };

    const hanldeOnSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, formRegister.email, formRegister.password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    firstName: formRegister.firstName,
                    lastName: formRegister.lastName,
                    displayName: formRegister.firstName + ' ' + formRegister.lastName,
                    photo: '',
                });
            }
            setFormRegister({
                email: '',
                firstName: '',
                lastName: '',
                password: '',
            });
            toast.success('User Registered Successfully', {
                position: 'top-center',
                autoClose: 2000,
            });
            setTimeout(() => {
                window.location.href = '/login';
            }, 4000);
        } catch (error) {
            toast.error(error.message, { position: 'bottom-center', autoClose: 2500 });
            console.log(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Register';
    }, []);

    return (
        <form onSubmit={hanldeOnSubmitRegister}>
            <InputForm
                onChange={handleOnRegisterChange}
                value={formRegister.firstName}
                type='text'
                label='First Name'
                name='firstName'
                id='firstName'
                placeholder='john'
            />
            <InputForm
                onChange={handleOnRegisterChange}
                value={formRegister.lastName}
                type='text'
                label='Last Name'
                name='lastName'
                id='lastName'
                placeholder='doe'
            />
            <InputForm
                onChange={handleOnRegisterChange}
                value={formRegister.email}
                type='email'
                label='Email'
                name='email'
                id='email'
                placeholder='example@mail.com'
            />
            <InputForm
                onChange={handleOnRegisterChange}
                value={formRegister.password}
                type='password'
                label='Password'
                name='password'
                id='password'
                placeholder='*****'
            />
            <Button type='submit' className='w-full text-white'>
                Register
            </Button>
        </form>
    );
};

export default FormRegister;
