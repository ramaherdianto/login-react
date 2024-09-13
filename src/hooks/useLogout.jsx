import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase';

export const useLogout = async (e) => {
    e.preventDefault();
    try {
        await auth.signOut();
        localStorage.removeItem('tokenFirebase');
        toast.success('User Logged Out Successfully', {
            position: 'top-center',
            autoClose: 2000,
        });
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);
    } catch (error) {
        console.log(error.message);
    }
};
