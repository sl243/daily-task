import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // user Create
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Google sign in 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // user sign in 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(email, password)
    }

    // User Log Out
    const logOut = () => {
        return signOut(auth);
    }

    // User Manage
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => unsubscribe();
    }, [])

    const AuthInfo = {
        user,
        userSignUp,
        signIn,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;