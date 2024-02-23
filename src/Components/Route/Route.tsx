import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import Home from "../Pages/Home/Home.tsx";
import Login from "../Pages/Login/Login.tsx";
import DocStatus from "../Dashboard/Pages/DocStatus/DocStatus.tsx";
import CompanyRegister from "../Dashboard/Pages/CompanyRegister/CompanyRegister.tsx";


const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/docstatus',
        element: <DocStatus></DocStatus>
      },
      {
        path: '/comregister',
        element: <CompanyRegister></CompanyRegister>
      }
    ]
  },

]);

export default Route