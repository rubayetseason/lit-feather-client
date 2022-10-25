import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/components/Blog";
import Courses from "../pages/components/Courses";
import FAQ from "../pages/components/FAQ";
import Home from "../pages/components/Home";
import Login from "../pages/components/Login";
import Register from "../pages/components/Register";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/courses', element: <Courses></Courses>
            },
            {
                path: '/faq', element: <FAQ></FAQ>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
        ]
    }
])