import {Navigate, Outlet, useLocation} from "react-router-dom";
import NavBar from './components/NavBar'

const useAuth = () => {
    const user = localStorage.getItem('token');
    return JSON.parse(user);
};

const PrivateRoutes = () => {
    const location = useLocation();
    const isAuth = useAuth();
    return isAuth ? <><NavBar /><Outlet /></> 
    : <Navigate to="/login" replace state={{from: location}} />;
};

export default PrivateRoutes;