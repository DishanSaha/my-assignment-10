import { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";
// import axios from "axios";
import Swal from "sweetalert2";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import toast from "react-hot-toast";

const LoginForm = () => {

    const { signInGoogle, setUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            setUser(res.user);
            Swal.fire({
                icon: "success",
                title: "Login successful",
                timer: 1500,
                showConfirmButton: false,
            });
            navigate("/");
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Login failed",
                text: err.message,
            });
        }
    };
    const handleGoogleSignIn = () => {

        signInGoogle()
            .then(result => {
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }

                // create user in the database-----
                fetch('https://my-assignment-10-sebajatra.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data after user save', data)
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleForgotPass = () => {
        const email = emailRef.current?.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Please check your email')
            })
            .catch()
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-5 rounded-2xl shadow-lg w-full max-w-sm">
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
                            ref={emailRef}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[36px] text-gray-600"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
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
                        <div onClick={handleForgotPass}
                            className="text-right text-sm"
                        >
                            <a href="#" className="text-blue-500 hover:underline lg:text-[12px] text-[9px] font-semibold">
                                Forgot Password?
                            </a>
                        </div>
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
