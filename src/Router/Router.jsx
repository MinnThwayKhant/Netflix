import React from 'react'
import { createBrowserRouter } from 'react-router'
import App from '../App.jsx'
import { Home } from '../pages/Home/Home.jsx'
import { Login } from '../pages/Login/Login.jsx'

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '',
                Component: Home
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    }

]) 
