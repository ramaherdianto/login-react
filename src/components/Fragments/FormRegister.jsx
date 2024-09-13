import React, { useEffect, useRef, useState } from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { useShowPassword } from '../../hooks/useShowPassword';

const FormRegister = () => {
    const [formRegister, setFormRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const { isShowPassword, handleShowPassword } = useShowPassword();
    const inputFocus = useRef();

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
            if (
                formRegister.firstName.trim() === '' ||
                formRegister.lastName.trim() === '' ||
                formRegister.email.trim() === '' ||
                formRegister.password.trim() === ''
            ) {
                toast.error('Please fill in all input fields!', {
                    position: 'top-center',
                    autoClose: 2000,
                });
            } else {
                await createUserWithEmailAndPassword(
                    auth,
                    formRegister.email,
                    formRegister.password
                );
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
            }
        } catch (error) {
            toast.error(error.message, { position: 'bottom-center', autoClose: 2500 });
            console.log(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Register';
    }, []);

    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    return (
        <form onSubmit={hanldeOnSubmitRegister} className='relative'>
            <InputForm
                ref={inputFocus}
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
                type={isShowPassword ? 'text' : 'password'}
                label='Password'
                name='password'
                id='password'
                placeholder='*****'
            />
            <Button
                onClick={handleShowPassword}
                type='button'
                className='absolute bg-transparent py-2 z-[999] bottom-[55px] right-2'
            >
                {isShowPassword ? (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        className='fill-slate-800'
                    >
                        <path d='M14 12c-1.095 0-2-.905-2-2 0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-.092-.02-.178-.027-.268-.29.165-.619.268-.973.268z'></path>
                        <path d='M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z'></path>
                    </svg>
                ) : (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        className='fill-slate-800'
                    >
                        <path d='M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z'></path>
                    </svg>
                )}
            </Button>
            <Button type='submit' className='w-full text-white'>
                Register
            </Button>
        </form>
    );
};

export default FormRegister;
