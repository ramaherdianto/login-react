import { useState } from 'react';

export const useShowPassword = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleShowPassword = () => {
        setIsShowPassword((isShowPassword) => !isShowPassword);
    };

    return { isShowPassword, handleShowPassword };
};
