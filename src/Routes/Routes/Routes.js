import Blog from "../../Component/Blog/Blog";
import CardDetails from "../../Component/cardDetails/CardDetails";
import CheckOut from "../../Component/CheckOut/CheckOut";

import Courses from "../../Component/Courses/Courses";
import ErrorPage from "../../Component/ErrorPage/ErrorPage";
import Login from "../../Component/Login/Login";
import PrivetRoute from "../../Component/PrivetRoute/PrivetRoute";

import Register from "../../Component/Register/Register";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "courses",
                element: <Courses></Courses>
            },
            {
                path: 'subject/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`https://study-zone-server-alimasud05.vercel.app/subject/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'checkout',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
            }

        ]


    },
    
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])