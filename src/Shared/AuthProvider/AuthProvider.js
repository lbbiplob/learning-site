
import { useState } from 'react';
import { createContext } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user , setUser] = useState()
    const ami = { name:'biplab', age:26}
    setUser(ami)
    const authInfo = {user}
     return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
     );
};

export default AuthProvider;