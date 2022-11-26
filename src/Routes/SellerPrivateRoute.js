import { useContext } from "react";
import { Blocks } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthProvider";
import useSeller from "../Hooks/useSeller";

const SellerPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
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

    if (user && isSeller) {
        return children
    }

    return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
};

export default SellerPrivateRoute;