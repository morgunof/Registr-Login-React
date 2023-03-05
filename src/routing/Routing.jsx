import {useContext} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {privateRoutes, publicRoutes} from "./routes"
import {routesConfig} from "./config"
import {PrivateRoute} from "./PrivateRoute";

export const Routing = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        <BrowserRouter>
            {
                isAuth ?
                    <Switch>
                        {privateRoutes.map(route =>
                            <Route
                                key={route.path}
                                {...route}
                            />)}
                        <Redirect to='/'/>
                    </Switch> :
                    <Switch>
                        {publicRoutes.map(route =>
                            <Route
                                key={route.path}
                                {...route}
                            />)}
                        <Redirect to='/login'/>
                    </Switch>
            }
        </BrowserRouter>
    )
}