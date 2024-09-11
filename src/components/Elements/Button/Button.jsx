import React from 'react';

const Button = ({ children, className, ...props }) => {
    return (
        <button {...props} className={`${className} p-2 bg-slate-800 rounded`}>
            {children}
        </button>
    );
};

export default Button;
