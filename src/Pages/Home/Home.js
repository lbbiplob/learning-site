import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';



const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>this is home{user.name} </h2>
        </div>
    );
};

export default Home;