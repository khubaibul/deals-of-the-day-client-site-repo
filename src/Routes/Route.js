import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Components/DashBoard/AddProduct/AddProduct";
import DefaultDashBoard from "../Components/DashBoard/DefaultDashBoard/DefaultDashBoard";
import CategoryDetails from "../Components/Pages/Categories/CategoryDetails";
import Home from "../Components/Pages/Home/Home/Home";
import UserProfile from "../Components/Pages/User/UserProfile";
import Login from "../Components/Shared/Authentication/Login/Login";
import SignUp from "../Components/Shared/Authentication/SignUp/SignUp";
import DashBoardLayout from "../Layouts/DashBoardLayout";
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
                path: "/category-details/:category_name",
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/category/${params.category_name}`)
            },
            {
                path: "/dashboard",
                element: <DashBoardLayout></DashBoardLayout>,
                children: [
                    {
                        path: "/dashboard",
                        element: <DefaultDashBoard></DefaultDashBoard>
                    },
                    {
                        path: "/dashboard/add-product",
                        element: <AddProducts></AddProducts>
                    }
                ]
            }

        ]
    }
])