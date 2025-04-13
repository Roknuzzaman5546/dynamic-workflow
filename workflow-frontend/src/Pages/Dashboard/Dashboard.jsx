import React from 'react';
import DashNav from '../../DashLayout/DashNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {


    return (
        <div>
            <DashNav />
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;
