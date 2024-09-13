import React, { useEffect } from 'react';
import { Card } from './Card';
import { useUserDetail } from '../../hooks/useUserDetail';
import { Link } from 'react-router-dom';
import Button from '../Elements/Button/Button';
import { auth } from '../../firebase/firebase';
import { toast } from 'react-toastify';

const Profile = () => {
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
        const token = localStorage.getItem('tokenFirebase');
        if (token) {
            return;
        } else {
            window.location.href = '/login';
        }
    }, []);

    return (
        <section className='w-full max-w-xl'>
            <Card>
                <Card.Body>
                    <h1 className='text-3xl font-semibold text-slate-800'>Profile 🧑‍💻</h1>
                    <p className='text-sm text-slate-400'>
                        <span>
                            Firstname:{' '}
                            {Object.keys(userDetail).length > 0
                                ? userDetail.firstName
                                : 'Loading...'}
                        </span>
                    </p>
                    <p className='text-sm text-slate-400'>
                        <span>
                            Lastname:{' '}
                            {Object.keys(userDetail).length > 0
                                ? userDetail.lastName
                                : 'Loading...'}
                        </span>
                    </p>
                    <p className='text-sm text-slate-400'>
                        <span>
                            Fullname:{' '}
                            {Object.keys(userDetail).length > 0
                                ? userDetail.displayName
                                : 'Loading...'}
                        </span>
                    </p>
                    <p className='text-sm text-slate-400'>
                        <span>
                            Email:{' '}
                            {Object.keys(userDetail).length > 0 ? userDetail.email : 'Loading...'}
                        </span>
                    </p>
                </Card.Body>
                <Card.Footer>
                    <Link
                        to='/welcome'
                        className='max-w-40 flex items-center text-slate-800 rounded'
                    >
                        Back
                    </Link>
                    <Button
                        onClick={handleLogout}
                        className='bg-transparent text-slate-800 font-bold'
                    >
                        Logout
                    </Button>
                </Card.Footer>
            </Card>
        </section>
    );
};

export default Profile;
