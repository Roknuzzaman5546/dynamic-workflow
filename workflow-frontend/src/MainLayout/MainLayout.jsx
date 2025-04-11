import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../NavFooter/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;