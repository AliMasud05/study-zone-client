import Blog from "../../Component/Blog/Blog";
import CardDetails from "../../Component/cardDetails/CardDetails";
import Courses from "../../Component/Courses/Courses";
import Login from "../../Component/Login/Login";

import Register from "../../Component/Register/Register";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[

            {
             path:"blog",
             element:<Blog></Blog>
            },
            {
             path:"courses",
             element:<Courses></Courses>
            },
            {
                path:'subject/:id',
                element:<CardDetails></CardDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/subject/${params.id}`)
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }

        ]
        
        
    }
])