import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // this is google login option
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // this is github login option
  const gitHubLogIn = (gitHubProvider) => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  // this is email password register option
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // this is user details update option

  const updateUserDetails = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // this is email password login option

  const emailPasswordLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // this is logout option

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // this is current user holding  option

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    googleLogin,
    logOut,
    createUser,
    emailPasswordLogIn,
    updateUserDetails,
    gitHubLogIn,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;