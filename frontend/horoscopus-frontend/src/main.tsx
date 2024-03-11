import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RegistrationPage from "./pages/registration/RegistrationPage.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/registration",
                element : <RegistrationPage/>
            },
            {
                path : "/login",
                element : <LoginPage/>
            },
            {
                path : "/home",
                element : <HomePage/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
