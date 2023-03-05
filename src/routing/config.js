import {Authorization} from "../pages/Authorization/Authorization";
import {Registration} from "../pages/Registration/Registration";
import {Main} from "../pages/Main/Main";

export const routesConfig = [
    {
        path: '/login',
        component: Authorization,
        isPrivate: false,
    },
    {
        path: '/registration',
        component: Registration,
        isPrivate: false,
    },
    {
        path: '/',
        component: Main,
        isPrivate: true,
    },
]