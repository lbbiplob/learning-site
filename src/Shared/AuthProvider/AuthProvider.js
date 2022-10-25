import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState('biplab');
  console.log(user);

  const googleLogin =(provider)=>{
    return signInWithPopup(auth , provider)
  }
  const gitHubLogIn = (gitHubProvider)=>{
    return signInWithPopup(auth, gitHubProvider);
  }
  const createUser =(email , password )=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateUserDetails = (profile) =>{
    return updateProfile(auth.currentUser, profile);
  }  
  const emailPasswordLogIn = (email, password )=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut =()=>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  
  },[])
  const authInfo = {
    user,
    googleLogin,
    logOut,
    createUser,
    emailPasswordLogIn,
    updateUserDetails,
    gitHubLogIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;