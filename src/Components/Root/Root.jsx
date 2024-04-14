import React from 'react';
import { Outlet } from "react-router-dom";
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <p>hi</p> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;