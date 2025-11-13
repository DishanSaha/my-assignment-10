import { useContext, useState } from 'react';
import { Link } from 'react-router'
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';

export default function Register() {

  const { createUser, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const photo = e.target.photo.value.trim();
    const password = e.target.password.value;



    if (name.length < 5) {
      setErrorMessage('Name should be more than 5 character')
      return
    }

    if (!agree) {
      toast.error('You must agree to the terms and condition')
    }
    // password valiation---

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long")
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one lowercase letter.");
      return;
    }


    createUser(email, password)
      .then(res => {
        const user = res.user;
        setUser(user);
        setErrorMessage('');
        setAgree('');
        // e.target.reset();
        // update firebase profile----
        return updateProfile(user, {
          displayName: name,
          photoURL: photo
        });
      })
      // create userObject for database----
      .then(() => {
        const userData = {
          name, email, photo, createdAt: new Date()
        }
        // save to mongoDB backend---
        return axios.post("https://my-assignment-10-sebajatra.vercel.app/users", userData);
      })
      .then(() => {
        toast.success(" Registered successfully!");
        e.target.reset();
      })
      .catch((e) => {
        console.log(e);
        toast.error("User already exists!");
      })
      .catch(error => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage)
      })

  }
  return (
    <div>
      <div className="max-w-md mt-25 mb-10 mx-auto  p-6 border rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Name</label>
            <input
              type="text"
              name="name"

              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block">Photo URL</label>
            <input
              type="text"
              name="photo"

              className="w-full border p-2 rounded"
            />
          </div>
          <div className="relative">
            <label className="block">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full border  border-gray-300 p-2 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[36px] text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="lg:w-4  h-4"
            />
            <span className="lg:text-[14px] text-black text-[9px]">
              I agree to the{" "}
              <a href="/terms" target="_blank" className="text-blue-400 underline">
                Terms and Conditions
              </a>
            </span>
          </label>
          <button
            type="submit"
            className="w-full bg-[#0fa47d] text-white py-2 rounded font-medium hover:bg-[#09634b]"
          >
            Register
          </button>
        </form>
        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
