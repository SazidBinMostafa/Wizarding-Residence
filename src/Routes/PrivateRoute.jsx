import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <div className="flex justify-center items-center w-full h-full">
                <span className="loading loading-dots loading-lg border"></span>
            </div>
        </>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}