import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Components/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../Components/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../Components/DashBoard/AllSellers/AllSellers";
import DefaultDashBoard from "../Components/DashBoard/DefaultDashBoard/DefaultDashBoard";
import MyOrders from "../Components/DashBoard/MyOrders/MyOrders";
import MyProducts from "../Components/DashBoard/MyProducts/MyProducts";
import MyWishlist from "../Components/DashBoard/MyWishlist/MyWishlist";
import Blogs from "../Components/Pages/Blogs/Blogs";
import CategoryDetails from "../Components/Pages/Categories/CategoryDetails";
import Home from "../Components/Pages/Home/Home/Home";
import UserProfile from "../Components/Pages/User/UserProfile";
import Login from "../Components/Shared/Authentication/Login/Login";
import SignUp from "../Components/Shared/Authentication/SignUp/SignUp";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import MainLayout from "../Layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/user-profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/category-details/:category_name",
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/category/${params.category_name}`)
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
                children: [
                    {
                        path: "/dashboard",
                        element: <DefaultDashBoard></DefaultDashBoard>
                    },
                    {
                        path: "/dashboard/add-product",
                        element: <AddProducts></AddProducts>
                    },
                    {
                        path: "/dashboard/my-products",
                        element: <MyProducts></MyProducts>
                    },
                    {
                        path: "/dashboard/my-wishlist",
                        element: <MyWishlist></MyWishlist>
                    },
                    {
                        path: "/dashboard/my-orders",
                        element: <MyOrders></MyOrders>
                    },
                    {
                        path: "/dashboard/all-sellers",
                        element: <AllSellers></AllSellers>
                    },
                    {
                        path: "/dashboard/all-buyers",
                        element: <AllBuyers></AllBuyers>
                    },
                ]
            }

        ]
    }
])