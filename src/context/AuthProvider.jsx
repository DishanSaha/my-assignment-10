import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.config'
import { AuthContext } from './AuthContext';
import { useEffect, useState } from 'react';

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google signIn---
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // signOut----
    const signOutGoogle = () => {
        setLoading(true)
        return signOut(auth)
    }

    // new users sign up----
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    // registered users----
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser)
            setLoading(false)
        });
        return () => unSubscribe();
    })

    const authInfo = {
        signInGoogle,
        signOutGoogle,
        loading,
        user,
        setUser,
        createUser,
        logOut,
        logIn

    }

    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    )
}


