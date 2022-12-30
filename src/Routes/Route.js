import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Components/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../Components/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../Components/DashBoard/AllSellers/AllSellers";
import DefaultDashBoard from "../Components/DashBoard/DefaultDashBoard/DefaultDashBoard";
import MyOrders from "../Components/DashBoard/MyOrders/MyOrders";
import MyProducts from "../Components/DashBoard/MyProducts/MyProducts";
import MyWishlist from "../Components/DashBoard/MyWishlist/MyWishlist";
import Payment from "../Components/DashBoard/Payment/Payment";
import About from "../Components/Pages/About/About";
import Blogs from "../Components/Pages/Blogs/Blogs";
import CategoryDetails from "../Components/Pages/Categories/CategoryDetails";
import Home from "../Components/Pages/Home/Home/Home";
import Products from "../Components/Pages/Products/Products";
import UserProfile from "../Components/Pages/User/UserProfile";
import Login from "../Components/Shared/Authentication/Login/Login";
import SignUp from "../Components/Shared/Authentication/SignUp/SignUp";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import MainLayout from "../Layouts/MainLayout";
import AdminPrivateRoute from "./AdminPrivateRoute";
import PrivateRoute from "./PrivateRoute";
import SellerPrivateRoute from "./SellerPrivateRoute";

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
                path: "/user-profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "all-products",
                element: <Products></Products>
            },
            {
                path: "/about-us",
                element: <About />
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
                        element: <SellerPrivateRoute><AddProducts></AddProducts></SellerPrivateRoute>
                    },
                    {
                        path: "/dashboard/my-products",
                        element: <SellerPrivateRoute><MyProducts></MyProducts></SellerPrivateRoute>
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
                        path: "/dashboard/payment/:id",
                        element: <Payment></Payment>
                    },
                    {
                        path: "/dashboard/all-sellers",
                        element: <AdminPrivateRoute><AllSellers></AllSellers></AdminPrivateRoute>
                    },
                    {
                        path: "/dashboard/all-buyers",
                        element: <AdminPrivateRoute><AllBuyers></AllBuyers></AdminPrivateRoute>
                    },
                ]
            }

        ]
    }
])