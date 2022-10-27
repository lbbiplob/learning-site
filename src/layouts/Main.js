import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>  
        </div>
    );
};

export default Main;