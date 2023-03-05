import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {AuthLayout} from "../../layouts/AuthLayout";
import {AuthContext} from '../../context/AuthContext'
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthService} from '../../api/AuthService';


export const Authorization = () => {

    const {setIsAuth} = useContext(AuthContext)

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const onSubmit = async (event) => {
        event.preventDefault()

        const newUser = await AuthService.login(user)

        localStorage.setItem('user', JSON.stringify(newUser))

        if (newUser) {
            setIsAuth(true)
            //alert('Вы авторизовались')
            return
        }
        setIsAuth(false)
        alert('Неверный логин или пароль')
    }

    return (
        <AuthLayout>
            <Box onSubmit={onSubmit}
                 component="form"
                 sx={{display: "flex", flexDirection: 'column', width: 300}}
            >
                <Input
                    required
                    placeholder="Логин"
                    type="email" sx={{marginBottom: 6}}
                    onChange={(event) => setUser({...user, email: event.target.value})}/>

                <Input
                    required
                    placeholder="Пароль"
                    type="password" sx={{marginBottom: 6}}
                    onChange={(event) => setUser({...user, password: event.target.value})}/>

                <Button
                    type="submit"
                    variant="contained">Войти</Button>

                <Link to="/Registration">
                    <Button
                        sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 4}}
                        type="">Зарегестрироваться</Button>
                </Link>
            </Box>
        </AuthLayout>
    );
}
