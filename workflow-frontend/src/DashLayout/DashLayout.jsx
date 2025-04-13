import React from 'react';
import DashNav from './DashNav';
import { Outlet } from 'react-router-dom';

const DashLayout = () => {


    return (
        <div>
            <DashNav />
            <Outlet></Outlet>
        </div>
    );
};

export default DashLayout;
