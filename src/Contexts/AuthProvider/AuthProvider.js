import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext =createContext();
const auth =getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [enroll,setEnroll]=useState("Title did no fount");


    const handleCheckOut=(item)=>{
         setEnroll(item);
    }
    const [theme,setTheme]=useState("light-theme")
    const handleTheme=()=>{
       theme==="dark-theme" ? setTheme("light-theme"):setTheme("dark-theme")
    }
    useEffect(()=>{
        document.body.className=theme;
    },[theme])


    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);

           setUser(currentUser);
           setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,loading,  setLoading,  providerLogin,  logOut,  updateUserProfile,createUser,
        signIn, enroll, setEnroll, handleCheckOut, handleTheme
    };
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;