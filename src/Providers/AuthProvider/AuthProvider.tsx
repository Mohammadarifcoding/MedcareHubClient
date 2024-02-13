import {
    GoogleAuthProvider, createUserWithEmailAndPassword,
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './../../Config/Firebase.config.js';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)

    const createUser = (email, password) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        setLoad(true)
        return signOut(auth)
    }

    const updateUser = (name, photo) => {
        setLoad(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });

    }


    const signInWithGoogle = () => {
        setLoad(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log('current user', currentUser);
            setLoad(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [])

    const providerInfo = {
        user,
        load,
        createUser,
        loginUser,
        logoutUser,
        updateUser,
        signInWithGoogle

    }
    return (
        <AuthContext.Provider value={providerInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;