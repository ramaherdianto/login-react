import React, { useEffect } from 'react';
import Button from '../Elements/Button/Button';
import { auth } from '../../firebase/firebase';
import { toast } from 'react-toastify';
import { useUserDetail } from '../../hooks/useUserDetail';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

const Welcome = () => {
    const userDetail = useUserDetail();

    useEffect(() => {
        document.title = 'Welcome aboard';
    }, []);

    return (
        <section className='max-w-xl w-full'>
            <Card>
                {Object.keys(userDetail).length > 0 ? (
                    <>
                        <Card.Body>
                            <h1 className='text-3xl font-semibold text-slate-800'>
                                Welcome aboard, {userDetail.firstName} 👋
                            </h1>
                            <p className='text-sm text-slate-400'>
                                We're excited to have you here. Let's get you started with a few
                                quick tips.
                            </p>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                onClick={useLogout}
                                className='bg-transparent text-slate-800 font-bold'
                            >
                                Logout
                            </Button>
                            <Link
                                to='/profile'
                                className='max-w-40 px-4 text-white bg-slate-800 flex items-center justify-center rounded'
                            >
                                Profile
                            </Link>
                        </Card.Footer>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </Card>
        </section>
    );
};

export default Welcome;
