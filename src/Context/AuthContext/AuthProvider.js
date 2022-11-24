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
    const [theme, setTheme] = useState(false);

    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Login with Email-Password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update UerProfile
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // Google SignIn
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Facebook SignIn
    const signInWithFacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }
    // Reset Password
    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (user === null) {
                setUser(currentUser);
            }
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
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
        setLoading,
        theme,
        setTheme
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
