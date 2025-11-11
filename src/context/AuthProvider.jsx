import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.config'
import { AuthContext } from './AuthContext';
import { useState } from 'react';

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {

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

    const authInfo = {
        signInGoogle,
        signOutGoogle,
        loading
    }

    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    )
}
