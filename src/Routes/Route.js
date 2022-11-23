import { createBrowserRouter } from "react-router-dom";
import CategoryDetails from "../Components/Pages/Home/Categories/CategoryDetails";
import Home from "../Components/Pages/Home/Home/Home";
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
                path: "/category-details/:id",
                element: <CategoryDetails></CategoryDetails>
            }
        ]
    }
])