import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading){
        return <button className="btn loading ">loading</button>;
    }
      if (!user) {
        return (
          <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
        );
      }
   return children;
};

export default PrivetRoutes;