import { useContext } from "react";
import { Blocks } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className='flex justify-center mt-10'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
};

export default AdminPrivateRoute;