import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import DocStatus from "../Dashboard/Pages/DocStatus/DocStatus";
import CompanyRegister from "../Dashboard/Pages/CompanyRegister/CompanyRegister";
import DoctorHistory from "../Dashboard/Pages/DoctorHistory/DoctorHistory";
=======
import Layout from "../Layout/Layout.tsx";
import Home from "../Pages/Home/Home.tsx";
import Login from "../Pages/Login/Login.tsx";
import DocStatus from "../Dashboard/Pages/DocStatus/DocStatus.tsx";
import CompanyRegister from "../Dashboard/Pages/CompanyRegister/CompanyRegister.tsx";
>>>>>>> c5260c628f6a1f4307521684c1382f75363ff549


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