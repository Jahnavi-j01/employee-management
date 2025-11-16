import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Please enter both username and password");
            return;
        }

        // Temporary login success (remove when backend ready)
        localStorage.setItem("user", username);
        localStorage.setItem("role", "Employee");
        navigate("/");
    };

    return (
        <div className="h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">

            <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96 border border-white/30">

                <h1 className="text-3xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
                    Welcome Back 👋
                </h1>

                {error && (
                    <p className="text-red-200 bg-red-500/20 p-2 rounded mb-3 text-center">
                        {error}
                    </p>
                )}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter username"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-white font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-purple-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;
