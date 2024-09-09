import React from 'react';
import Label from './Label';
import Input from './Input';

const InputForm = ({ name, label, type, placeholder, ...props }) => {
    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input {...props} id={name} name={name} type={type} placeholder={placeholder} />
        </>
    );
};

export default InputForm;
