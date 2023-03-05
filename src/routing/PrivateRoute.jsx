import {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export const PrivateRoute = (props) => {

    const {isAuth} = useContext(AuthContext)

    const token = localStorage.getItem('token')

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }
    return <Route {...props} />
}