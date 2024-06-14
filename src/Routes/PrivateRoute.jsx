import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


function PrivateRoute({children}){
    const {user} = useContext(AuthContext);
    const location = useLocation();
    
    console.log(location)

    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}