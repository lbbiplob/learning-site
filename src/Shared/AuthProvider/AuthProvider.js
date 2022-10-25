import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState('biplab');
  

  const googleLogin =(provider)=>{
    return signInWithPopup(auth , provider)
  }
  const createUser =(email , password )=>{
    return createUserWithEmailAndPassword(auth, email, password)
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
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;