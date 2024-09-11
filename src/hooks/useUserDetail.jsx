import { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export const useUserDetail = () => {
    const [userDetail, setUserDetail] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetail(docSnap.data());
            } else {
                console.log('No user data found');
            }
        });

        return () => unsubscribe();
    }, [auth, db]);

    return userDetail;
};
