import { createBrowserRouter } from "react-router-dom";
import CategoryDetails from "../Components/Pages/Categories/CategoryDetails";
import Home from "../Components/Pages/Home/Home/Home";
import UserProfile from "../Components/Pages/User/UserProfile";
import Login from "../Components/Shared/Authentication/Login/Login";
import SignUp from "../Components/Shared/Authentication/SignUp/SignUp";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/user-profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/category-details/:id",
                element: <CategoryDetails></CategoryDetails>
            }
        ]
    }
])