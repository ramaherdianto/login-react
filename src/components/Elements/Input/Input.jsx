import React, { forwardRef } from 'react';

const Input = forwardRef(({ type = 'text', placeholder, name, ...props }, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            type={type}
            className='text-sm border rounded w-full mb-4 py-2 px-3 text-slate-700 placeholder:opacity-50 focus:ring focus:ring-slate-700 focus:outline-none duration-300'
            placeholder={placeholder}
            name={name}
            id={name}
        />
    );
});

export default Input;
