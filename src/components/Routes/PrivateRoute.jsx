import Proptypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
// import { BallTriangle } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()


    if (loading) {
        return <div className=" flex justify-center items-center">
            <span className="loading loading-dots loading-lg text-pink-500"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: Proptypes.node
}