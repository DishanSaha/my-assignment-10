import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, useLocation } from "react-router";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner text-success w-15 lg:w-30"></span>
            </div>
        );
    }
    // register if no user---
    if (!user) {
        return <Navigate to='/register' state={{ from: location }} replace></Navigate>
    }
    // show the protected content---
    return children;

}
