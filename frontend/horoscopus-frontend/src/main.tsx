import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import RegistrationPage from "./pages/registration/RegistrationPage.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import HoroscopePage from "./pages/horoscope/HoroscopePage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage.tsx";
import DateReserveForm from "./pages/date-reserve/DateReserveForm.tsx";
import ProfileForm from "./pages/profile/ProfileForm.tsx";


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
            },
            {
                path : "/profile",
                element : <ProfileForm/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
