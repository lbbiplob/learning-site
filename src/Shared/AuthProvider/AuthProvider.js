import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState('biplab');
  

  const googleLogin =(provider)=>{
    return signInWithPopup(auth , provider)
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
  const authInfo = { user, googleLogin, logOut };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;