import UserRoot from "../Components/User/userRoot"
import About from "../Pages/User/About"
import Contact from "../Pages/User/Contact"
import Home from "../Pages/User/Home"
import Login from "../Pages/User/Login"
import Register from "../Pages/User/Register"
import Services from "../Pages/User/Services"
import adminRoutes from './adminRoutes'
import { Navigate } from 'react-router-dom'

const ROUTES = [
   
    adminRoutes,
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "services",
                element: <Services />
            }
        ]
    },

    {
        path: "*",
        element: <Navigate to="/" replace />
    }
]

export default ROUTES