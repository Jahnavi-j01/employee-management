import React from "react";

const Profile = () => {

    // Read stored user data (if any)
    const username = localStorage.getItem("user");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    return (
        <div className="h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">

            <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96 border border-white/30">

                <h1 className="text-3xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
                    Your Profile
                </h1>

                <div className="text-white space-y-4 text-lg">

                    {username && (
                        <p>
                            <span className="font-semibold">Username: </span> {username}
                        </p>
                    )}

                    
                    {role && (
                        <p>
                            <span className="font-semibold">Role: </span> {role}
                        </p>
                    )}

                    {/* If nothing is set */}
                    {!username && !email && !role && (
                        <p className="text-center text-white/80">
                            No profile data found.
                        </p>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Profile;
