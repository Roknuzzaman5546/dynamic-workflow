import { createContext, useContext, useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import Swal from 'sweetalert2';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    console.log(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            axiosPublic.get('/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => setUser(res.data))
                .catch((error) => {
                    localStorage.removeItem('token');
                    setToken('');
                    setUser(error);
                });
        }
    }, []);

    const login = (token, user) => {
        localStorage.setItem('token', token);
        setToken(token);
        setUser(user);
    };

    const logout = async () => {
        try {
            const res = await axiosPublic.post('/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res) {
                console.log(res.data);
                Swal.fire('Log out Successfully');
                localStorage.removeItem('token');
                setToken('');
                setUser(null);
            }
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
