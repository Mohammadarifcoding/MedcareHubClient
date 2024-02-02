import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import DocStatus from "../Dashboard/Pages/DocStatus/DocStatus";



const Route = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/docstatus',
          element:<DocStatus></DocStatus>
        }
      ]
    },
  
  ]);

  export default Route