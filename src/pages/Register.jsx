import { Link } from 'react-router'

export default function Register() {
  return (
    <div>
      <div className="max-w-md mt-25 mb-10 mx-auto  p-6 border rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form className="space-y-4">
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
              name="photoURL"

              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block">Password</label>
            <input
              type="password"
              name="password"

              required
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0fa47d] text-white py-2 rounded font-medium hover:bg-[#09634b]"
          >
            Register
          </button>
        </form>
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
