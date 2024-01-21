import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

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
            path:'/',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default Route