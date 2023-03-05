import {useContext, useState} from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import {AuthLayout} from "../../layouts/AuthLayout";
import {AuthService} from "../../api/AuthService";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";

export const Registration = () => {

    const {setIsAuth} = useContext(AuthContext)

    const [user, setUser] = useState({email: '', password: ''})
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()

        if (user.password.length <6) {
            return (
                alert('Пароль не может быть меньше 6 символов')
            )
        }

        if (user.password !== confirmPassword) {
            return (
                alert('Пароли не совпадают')
            )
        }

        const allUsers = await AuthService.getAllUsers()
        const findUser = allUsers.find(u => u.email === user.email)

        if (findUser) {
            alert('Вы уже зарегистрированы')
            return
        }

        const newUser = await AuthService.registration(user)
        localStorage.setItem('user', JSON.stringify(newUser))
        setIsAuth(true)
    }

    return (
        <AuthLayout>
            <Box
                component="form"
                sx={{display: "flex", flexDirection: 'column', width: 300}}
                onSubmit={onSubmit}
            >
                <Input
                    required
                    placeholder="Логин"
                    type="email"
                    sx={{marginBottom: 6}}
                    onChange={e => setUser({...user, email: e.target.value})}/>

                <Input
                    required
                    class="input-en"
                    placeholder="Пароль"
                    type="password"
                    sx={{marginBottom: 6}}
                    onChange={e => setUser({...user, password: e.target.value})}/>

                <Input
                    required
                    class="input-en"
                    placeholder="Повторите пароль"
                    type="password"
                    sx={{marginBottom: 6}}
                    onChange={e => setConfirmPassword(e.target.value)}/>

                <Button
                    variant="contained"
                    type="submit">Зарегистрироваться</Button>

                <Link to="/Login">
                    <Button
                        sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 4}}
                        type="">Войти</Button>
                </Link>
            </Box>
        </AuthLayout>
    )
}