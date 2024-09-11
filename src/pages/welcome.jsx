import React, { useEffect } from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import Welcome from '../components/Fragments/Welcome';

const WelcomePage = () => {
    return (
        <>
            <MainLayout>
                <Welcome />
            </MainLayout>
        </>
    );
};

export default WelcomePage;
