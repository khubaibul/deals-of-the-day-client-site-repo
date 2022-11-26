import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import {
    createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail,
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,
} from 'firebase/auth'
import app from '../../Firebase/Firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Login with Email-Password
    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update UerProfile
    const updateUserProfile = (name, photo) => {
        setLoading(false)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // Google SignIn
    const signInWithGoogle = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    // Facebook SignIn
    const signInWithFacebook = () => {
        setLoading(false)
        return signInWithPopup(auth, facebookProvider)
    }
    // Reset Password
    const resetPassword = email => {
        setLoading(false)
        return sendPasswordResetEmail(auth, email)
    }

    // Logout
    const logOut = () => {
        setLoading(false);
        localStorage.removeItem('deals-of-the-day')
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (user === null) {
                setLoading(false);
                setUser(currentUser);
            }
        });

        return () => unsubscribe()

    }, []);

    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        signInWithGoogle,
        signInWithFacebook,
        logOut,
        signIn,
        resetPassword,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
