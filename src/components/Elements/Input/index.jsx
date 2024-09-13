import React, { forwardRef } from 'react';
import Label from './Label';
import Input from './Input';

const InputForm = forwardRef(({ name, label, type, placeholder, ...props }, ref) => {
    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input
                {...props}
                ref={ref}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </>
    );
});

export default InputForm;
