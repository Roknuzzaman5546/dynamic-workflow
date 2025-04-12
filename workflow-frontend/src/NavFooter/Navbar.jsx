import React from 'react';
import logo from '../assets/Images/logo.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../Components/Hooks/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth()
    return (
        <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110 flex items-center gap-2">
                <img className=' w-8' src={logo} alt="" srcset="" />
                <h2 className=' font-sans'>Workflow</h2>
            </div>
            <div className="flex items-center justify-between gap-16">
                <ul className="flex items-center justify-between gap-10">
                    <li className="group flex  cursor-pointer flex-col">
                        Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        Dashboard <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
                <div className="flex items-center justify-between gap-5">
                    { user ?
                    <button onClick={logout} className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log Out</button>
                         : <Link to='/auth'>
                         <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button>
                     </Link>
                        
                    }
                </div>
            </div>
        </nav>

    );
};

export default Navbar;