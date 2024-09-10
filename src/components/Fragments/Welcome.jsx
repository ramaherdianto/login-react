import React from 'react';
import Button from '../Elements/Button/Button';
import { auth } from '../../firebase/firebase';

const Welcome = () => {
    const handleLogout = async () => {
        try {
            await auth.signOut();
            window.location.href = '/';
            console.log('Logged out successfull');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <section className='max-w-xl w-full'>
            <article className='bg-[#f8f8f8] p-8 flex flex-col justify-center gap-10 rounded shadow-lg'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl font-semibold text-slate-800'>
                        Welcome aboard, Tom 👋
                    </h1>
                    <p className='text-sm text-slate-400'>
                        We're excited to have you here. Let's get you started with a few quick tips.
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
            </article>
        </section>
    );
};

export default Welcome;
