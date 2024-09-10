import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { jwtDecode } from 'jwt-decode';

export const login = async (email, password, callback) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    callback(true, userCredential.user.accessToken);
};

export const getUserData = (token) => {
    const decoded = jwtDecode(token);
    return decoded;
};
