import React, { useEffect, useState } from 'react';
import Button from '../Elements/Button/Button';
import { auth, db } from '../../firebase/firebase';
import { toast } from 'react-toastify';
import { doc, getDoc } from 'firebase/firestore';
import { useLogin } from '../../hooks/useLogin';
import { useUserDetail } from '../../hooks/useUserDetail';

const Welcome = () => {
    const userLogin = useLogin();
    const userDetail = useUserDetail();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await auth.signOut();
            localStorage.removeItem('tokenFirebase');
            toast.success('User Logged Out Successfully', {
                position: 'top-right',
                autoClose: 2000,
            });
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Welcome aboard';
    }, []);

    return (
        <section className='max-w-xl w-full'>
            <article className='bg-[#f8f8f8] p-8 flex flex-col justify-center gap-10 rounded shadow-lg'>
                {Object.keys(userDetail).length > 0 ? (
                    <>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-3xl font-semibold text-slate-800'>
                                Welcome aboard, {userDetail.firstName} 👋
                            </h1>
                            <p className='text-sm text-slate-400'>
                                We're excited to have you here. Let's get you started with a few
                                quick tips.
                            </p>
                        </div>
                        <div className='flex gap-6'>
                            <Button
                                onClick={handleLogout}
                                className='bg-transparent text-slate-800 font-bold'
                            >
                                Logout
                            </Button>
                            <Button className='max-w-40 px-4 text-white'>Profile</Button>
                        </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </article>
        </section>
    );
};

export default Welcome;
