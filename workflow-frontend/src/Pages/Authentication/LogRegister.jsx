// Add here also change some code and create by sajib
import React, { useState } from 'react';
import useAxiosPublic from '../../Components/Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Components/Hooks/AuthContext';

const LogRegister = () => {
    const { login } = useAuth();
    const [signUp, setSignUp] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (!email || !password) {
            Swal.fire('Please fill in all fields', '', 'warning');
            return;
        }

        const loginData = { email, password };

        try {
            const res = await axiosPublic.post('/api/login', loginData);
            localStorage.setItem('token', res.data.access_token);
            login(res.data.access_token, res.data.user);
            Swal.fire('Successfully Logged in!', '', 'success');
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            Swal.fire('Login failed!', error.response?.data?.message || 'An error occurred', 'error');
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const password_confirmation = form.password_confirmation.value.trim();

        if (!name || !email || !password || !password_confirmation) {
            Swal.fire('Please fill in all fields', '', 'warning');
            return;
        }

        if (password !== password_confirmation) {
            Swal.fire('Passwords do not match', '', 'warning');
            return;
        }

        const registerData = { name, email, password, password_confirmation };

        try {
            await axiosPublic.post('/api/register', registerData);
            Swal.fire('Successfully Registered!', '', 'success');
            setSignUp(false);
        } catch (error) {
            console.error('Register error:', error);
            Swal.fire('Register failed!', error.response?.data?.message || 'An error occurred', 'error');
        }
    };

    return (
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border bg-white dark:border-zinc-700 dark:bg-zinc-900 mt-40">
            <div className={`flex select-none gap-2 border-b p-2.5 ${signUp ? 'last-of-type:*:bg-zinc-600 last-of-type:*:text-white' : 'first-of-type:*:bg-zinc-600 first-of-type:*:text-white'}`}>
                <button onClick={() => setSignUp(false)} aria-label="Switch to Sign In">Sign In</button>
                <button onClick={() => setSignUp(true)} aria-label="Switch to Sign Up">Sign Up</button>
            </div>

            <div className="w-full flex-col items-center overflow-hidden p-4 sm:p-8">
                {/* Sign Up Form */}
                <form onSubmit={handleSignup} className={`${signUp ? 'h-full duration-300' : 'invisible h-0 opacity-0'} space-y-3 sm:space-y-5`}>
                    <h1 className="mb-6 uppercase backdrop-blur-sm sm:text-2xl">Sign Up</h1>
                    <div className="space-y-4">
                        <input type="text" name="name" placeholder="Name" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700" />
                        <input type="email" name="email" placeholder="Email" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700" />
                        <input type="password" name="password" placeholder="Password" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700" />
                        <input type="password" name="password_confirmation" placeholder="Confirm Password" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700" />
                    </div>
                    <button type="submit" className="mx-auto block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                        Submit
                    </button>
                    <p className="text-center">Already have an account? 
                        <button type="button" onClick={() => setSignUp(false)} className="font-semibold underline">Sign In</button>
                    </p>
                </form>

                {/* Sign In Form */}
                <form onSubmit={handleSignIn} className={`${signUp ? 'h-0 opacity-0' : 'h-full duration-300'} space-y-3 sm:space-y-5`}>
                    <h1 className="mb-3 uppercase sm:mb-5 sm:text-2xl">Sign In</h1>
                    <input type="email" name="email" placeholder="Email" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700" />
                    <input type="password" name="password" placeholder="Password" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700" />
                    <p className="text-end text-sm text-zinc-600 dark:text-zinc-300">
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </p>
                    <button type="submit" className="mx-auto block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                        Submit
                    </button>
                    <p className="text-center">Don't have an account? 
                        <button type="button" onClick={() => setSignUp(true)} className="font-semibold underline">Sign Up</button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LogRegister;