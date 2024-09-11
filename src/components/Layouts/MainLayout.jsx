import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <main className='min-h-screen w-full flex items-center justify-center px-4'>
            {children}
        </main>
    );
};

export default MainLayout;
