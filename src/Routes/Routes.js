import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/components/Blog";
import Checkout from "../pages/components/Checkout";
import Courses from "../pages/components/Courses";
import Detail from "../pages/components/Detail";
import FAQ from "../pages/components/FAQ";
import Home from "../pages/components/Home";
import Login from "../pages/components/Login";
import Register from "../pages/components/Register";
import NotFound from "../pages/shared/NotFound";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/course/:id', element: <Detail></Detail>,
                loader: ({ params }) => fetch(`https://litfeather-server.vercel.app/course/${params.id}`)
            },

            {
                path: '/courses', element: <Courses></Courses>,
                loader: () => fetch('https://litfeather-server.vercel.app/courses')
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
            {
                path: 'checkout/:id', element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://litfeather-server.vercel.app/checkout/${params.id}`)
            }
        ]
    },
    { path: '*', element: <NotFound></NotFound> }
])