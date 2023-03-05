import {useEffect, useState} from "react";
import {AuthContext} from './context/AuthContext'
import {Routing} from "./routing/Routing";

export const App = () => {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem('user')

        setIsAuth(!!user)
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <Routing/>
        </AuthContext.Provider>
    );
}