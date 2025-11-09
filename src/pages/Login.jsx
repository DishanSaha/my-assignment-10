import { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // npm install react-icons
import { Link } from "react-router";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // TODO: Add backend or Firebase authentication here
    };

    // Dummy Google Sign-In Handler
    const handleGoogleSignIn = () => {
        console.log("Google Sign-In Clicked");
        // TODO: Replace with Firebase signInWithPopup(googleProvider)
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Login to Your Account
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#0fa47d] text-white font-medium py-2 rounded-lg hover:bg-[#09634b] transition"
                    >
                        Login
                    </button>

                    {/* OR Divider */}
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-400 text-sm">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* ✅ Google Sign-In Button */}
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        <FcGoogle className="text-xl" />
                        <span>Continue with Google</span>
                    </button>

                    {/* Links */}
                    <div className="flex justify-between text-sm mt-3">
                        <a href="#" className="text-blue-600 hover:underline">
                            Forgot Password?
                        </a>
                        <Link to="/auth/register" className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
