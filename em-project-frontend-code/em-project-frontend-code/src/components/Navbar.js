import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate('/profile');
    };

    const logout = () => {
        // Clear all possible login keys
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('username');

        navigate('/login'); 
    };

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
            <div 
                className="text-xl font-bold cursor-pointer" 
                onClick={() => navigate('/')}
            >
                Employee Management
            </div>

            <div className="space-x-4">
                <button
                    onClick={goToProfile}
                    className="bg-blue-500 hover:bg-blue-700 py-1 px-4 rounded"
                >
                    Profile
                </button>

                <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-700 py-1 px-4 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
