import React from 'react';
import logo from '../assets/Images/logo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../Components/Hooks/AuthContext';

const Navbar = () => {
    const { user, logout, userWithRole } = useAuth();

    return (
        <nav className="flex flex-wrap items-center justify-between bg-[#393E46] px-4 py-2 text-white">
            <Link to="/" aria-label="Go to Home">
                <div className="flex items-center gap-2 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <img className="w-8" src={logo} alt="Workflow Logo" />
                    <h2 className="font-sans">Workflow</h2>
                </div>
            </Link>
            <div className="flex flex-wrap items-center justify-between gap-16">
                <ul className="flex items-center justify-between gap-10">
                    <li className="group flex cursor-pointer flex-col">
                        <Link to="/" aria-label="Go to Home">
                            Home
                            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="group flex cursor-pointer flex-col">
                        {userWithRole?.role_name === 'Admin' ? (
                            <Link to="/dashboard/admindash" aria-label="Go to Admin Dashboard">
                                Dashboard
                                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ) : (
                            <Link to="/dashboard/userDash" aria-label="Go to User Dashboard">
                                Dashboard
                                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )}
                    </li>
                </ul>
                <div className="flex items-center justify-between gap-5">
                    {user ? (
                        <button
                            onClick={logout}
                            className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
                            aria-label="Log Out"
                        >
                            Log Out
                        </button>
                    ) : (
                        <Link to="/auth" aria-label="Go to Login">
                            <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">
                                Log In
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;