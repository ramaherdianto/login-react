import React from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button/Button';

const FormLogin = () => {
    return (
        <form>
            <InputForm
                type='email'
                label='Email'
                name='email'
                id='email'
                placeholder='example@mail.com'
            />
            <InputForm
                type='password'
                label='Password'
                name='password'
                id='password'
                placeholder='*****'
            />
            <Button className='w-full'>Login</Button>
        </form>
    );
};

export default FormLogin;
