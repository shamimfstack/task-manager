import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import Tasks from "../Pages/Tasks/Tasks.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/tasks",
                element: <Tasks />
            }
        ]
    }

])