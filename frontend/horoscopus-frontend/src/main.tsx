import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RegistrationPage from "./pages/registration/RegistrationPage.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import HoroscopePage from "./pages/horoscope/HoroscopePage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage.tsx";
import DateReserveForm from "./pages/date-reserve/DateReserveForm.tsx";


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
            },
            {
                path : "/horoscopes",
                element : <HoroscopePage/>
            },
            {
                path : "/admin",
                element : <AdminPage/>
            },
            {
                path : "/reserve",
                element : <DateReserveForm/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
