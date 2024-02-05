import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home.tsx';
import Layout from './Components/Layout/Layout.tsx';
import { render } from '@testing-library/react';
import Contact from './Components/Pages/Contact/Contact.tsx';
import AuthProvider from './Providers/AuthProvider/AuthProvider.tsx';
import Login from './Components/Pages/Login/Login.tsx';
import Register from './Components/Pages/Register/Register.tsx';
import Doctors from './Components/Pages/Doctors/Doctors.tsx';
import Medicines from './Components/Pages/Medicines/Medicines.tsx';
import DashboardLayout from './Components/Dashboard/Layout/DashboardLayout.tsx';
import Profile from './Components/Dashboard/Pages/Profile/Profile.tsx';
import DoctorDetails from './Components/Pages/Doctors/DoctorCard/DoctorDetails.tsx';
import Forum from './Components/Forum/Forum.tsx';
import About from './Components/Pages/About/About.tsx';
import CompanyDetails from './Components/Pages/CompanyDetails/CompanyDetails.tsx';
import DocStatus from './Components/Dashboard/Pages/DocStatus/DocStatus.tsx';
import CompanyProduct from './Components/Dashboard/companyProduct/CompanyProduct.tsx';
import DetailsMedicien from '../public/Asset/DetailsOfMedicine/DetailsMedicien.tsx';
import MedicienDetails from './Components/Pages/Detailsofmediciens/MedicienDetails.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AllUser from './Components/Dashboard/Pages/AllUser.tsx';

import { MedicineProvider } from './Components/Pages/Medicines/MedicineContext/MedicineContext.jsx';

import CreateDoctor from './Components/Pages/CreateDoctors/CreateDoctor.jsx';
import Blog from './Components/Pages/Blogs/Blog.tsx';

import MyBlog from './Components/Pages/Blogs/MyBlog.tsx';

import Cart from './Components/Pages/Cart/Cart.tsx';

import AddProduct from './Components/Dashboard/Pages/ProductPages/AddProduct.tsx';
import MyProduct from './Components/Dashboard/Pages/ProductPages/MyProduct.tsx';
import UpdateProduct from './Components/Dashboard/Pages/ProductPages/UpdateProduct.tsx';

const queryClient = new QueryClient()






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/doctors',
        element: <Doctors></Doctors>
      },
      {
        path: '/doctors/:id',
        element: <DoctorDetails></DoctorDetails>
      },
      {
        path: '/medicines',
        element: <Medicines></Medicines>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/company/:companyname',
        element: <CompanyDetails></CompanyDetails>
      }, {
        path: '/detailsmedicines',
        element: <MedicienDetails></MedicienDetails>
      }, {
        path: '/addoctor',
        element: <CreateDoctor></CreateDoctor>
      }, {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>
      },
      {
        path: '/dashboard/docstatus',
        element: <DocStatus></DocStatus>
      }, {
        path: '/dashboard/comproduct',
        element: <CompanyProduct></CompanyProduct>
      },
      {
        path: '/dashboard/alluser',
        element: <AllUser></AllUser>
      },
      {
        path: '/dashboard/myblog',
        element: <MyBlog></MyBlog>
      },
      {
        path: '/dashboard/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/dashboard/myproduct',
        element: <MyProduct></MyProduct>
      },
      {
        path: '/dashboard/updateproduct/:id',
        element: <UpdateProduct></UpdateProduct>
      },
    ]
  },
  {
    path: '/forum',
    element: <Forum></Forum>
  }
]);


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
       <MedicineProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className='bg-[#EEF2FB]'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProvider>
      </MedicineProvider>
    </React.StrictMode>)

} else {
  // handle the case when the element with id 'root' is not found
  render(<div>Root elemeent Not found</div>, document.body)
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
