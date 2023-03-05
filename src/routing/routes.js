import {Authorization} from "../pages/Authorization/Authorization";
import {Registration} from "../pages/Registration/Registration";
import {Main} from "../pages/Main/Main";

export const privateRoutes = [
    {
        path: '/',
        component: Main,
        exact: true
    },
]

export const publicRoutes = [
    {
        path: '/login',
        component: Authorization,
        exact: true
    },
    {
        path: '/registration',
        component: Registration,
        exact: true
    },
]