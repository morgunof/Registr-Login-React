import {MainLayout} from "../../layouts/MainLayout";
import Button from "@mui/material/Button";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

export const Main = () => {
    const {setIsAuth} = useContext(AuthContext)
    const token = JSON.parse(localStorage.getItem("user")).token

    const logout = () => {
        localStorage.clear()
        setIsAuth(false)
    }
    return (
        <MainLayout>
            <h1>Твой токен {token}</h1>
            <Button onClick={logout}
                    sx={{display: "flex", flexDirection: 'column', width: 100, padding: 0, margin: 0}}
                    type="">Выйти</Button>
        </MainLayout>
    )
}
