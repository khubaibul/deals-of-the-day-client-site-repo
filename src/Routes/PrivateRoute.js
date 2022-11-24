import { useContext } from "react";
import { Blocks } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center'>
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

    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }}></Navigate>

}

export default PrivateRoute;