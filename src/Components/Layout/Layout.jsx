import React from 'react';
import Navbar from './Navbar';
import Menubar from './Menubar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            {/* Hi */}
            <Navbar></Navbar>
            {/* <Menubar></Menubar> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;