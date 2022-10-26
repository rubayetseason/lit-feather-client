import React, { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const GoogleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };
    const GithubLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = { user, GoogleLogin, GithubLogin };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;