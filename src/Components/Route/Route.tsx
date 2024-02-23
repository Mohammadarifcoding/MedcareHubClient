import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import DocStatus from "../Dashboard/Pages/DocStatus/DocStatus";
import CompanyRegister from "../Dashboard/Pages/CompanyRegister/CompanyRegister";
import DoctorHistory from "../Dashboard/Pages/DoctorHistory/DoctorHistory";


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