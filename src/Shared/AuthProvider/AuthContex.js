
import { useState } from 'react';
import { createContext } from 'react';
export const AuthContext = createContext();
const AuthProvider = () => {
    const [user , setUser] = useState('joni vai')

    const authInfo = {user}
    return <AuthContext.Provider value={ authInfo } >
       
        </AuthContext.Provider>;
};

export default AuthProvider;