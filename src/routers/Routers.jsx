import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/login/Register'

const Routers = () => {
    const routing = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: 'home',
                    element: <Home />,
                },
                {
                    path: 'login',
                    element: <Login/>
                },
                {
                    path: 'appLogin',
                    element: <Register />
                },
    
            ],
        },
    ])
    return routing
}

export default Routers
