import React from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button/Button';

const FormRegister = () => {
    return (
        <form>
            <InputForm
                type='text'
                label='First Name'
                name='firstname'
                id='firstname'
                placeholder='john'
            />
            <InputForm
                type='text'
                label='Last Name'
                name='lastname'
                id='lastname'
                placeholder='doe'
            />
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
            <Button className='w-full'>Register</Button>
        </form>
    );
};

export default FormRegister;
