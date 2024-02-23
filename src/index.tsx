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
import CompanyProduct from './Components/Dashboard/companyProduct/CompanyProduct.tsx';
import DetailsMedicien from '../public/Asset/DetailsOfMedicine/DetailsMedicien.tsx';
import MedicienDetails from './Components/Pages/Detailsofmediciens/MedicienDetails.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AllUser from './Components/Dashboard/Pages/AllUser.tsx';
import { MedicineProvider } from './Components/Pages/Medicines/MedicineContext/MedicineContext.tsx';
import Blog from './Components/Pages/Blogs/Blog.tsx';
import MyBlog from './Components/Pages/Blogs/MyBlog.tsx';
import Cart from './Components/Pages/Cart/Cart.tsx';
import AddProduct from './Components/Dashboard/Pages/ProductPages/AddProduct.tsx';
import MyProduct from './Components/Dashboard/Pages/ProductPages/MyProduct.tsx';
import UpdateProduct from './Components/Dashboard/Pages/ProductPages/UpdateProduct.tsx';
import PatientRegister from './Components/Dashboard/Pages/Patient/PatientRegister/PatientRegister.tsx';
import CreateDoctor from './Components/Pages/CreateDoctors/CreateDoctor.tsx';
import DoctorQue from './Components/Pages/Doctors/DoctorQue.tsx';
import DocStatus from './Components/Dashboard/Pages/DocStatus/DocStatus.tsx';
import CompanyRegister from './Components/Dashboard/Pages/CompanyRegister/CompanyRegister.tsx';
import Testing from './Components/designTest/Testing.tsx';
import BlogDetails from './Components/Pages/Blogs/BlogDetails.jsx';
import { base_URL } from './utills/BaseURL.ts';
import AllPatient from './Components/Dashboard/Pages/Patient/AllPatient.tsx';
import AllCompany from './Components/Dashboard/Pages/CompanyRegister/AllCompany.tsx';
import ComDesh from './Components/companyDash/ComDesh.tsx';
import MedWishList from './Components/Pages/Medicines/MedicinItem/MedWishList.tsx';
import CheckoutPage from './Components/Pages/CheckOut/CheckoutPage.tsx';
import AdminRoute from './Components/RelatedProduct/AdminRoute.tsx';
import Orders from './Components/Dashboard/Pages/Orders/Orders.jsx';
import DoctorVisiting from './Components/Dashboard/Pages/DoctorVisiting/DoctorVisiting.jsx';
import AllMedicine from './Components/Dashboard/Pages/AllMedicine/AllMedicine.tsx';
import AllBlog from './Components/Dashboard/Pages/AllBlog/AllBlog.tsx';
import MyOrder from './Components/Dashboard/Pages/MyOrder/MyOrder.tsx';
import DoctorVisitingDetails from './Components/Dashboard/Pages/DoctorVisiting/DoctorVisitingDetails.jsx';
import DoctorHistory from './Components/Dashboard/Pages/DoctorHistory/DoctorHistory.tsx';


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
      }, {
        path: '/data',
        element: <Testing></Testing>
      },
      {
        path: '/company/:companyname',
        element: <CompanyDetails></CompanyDetails>
      }, {
        path: '/detailsMed/:id',
        element: <MedicienDetails></MedicienDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/detailsMed/${params?.id}`)
      }, {
        path: '/addoctor',
        element: <CreateDoctor></CreateDoctor>
      }, {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/blogdetails/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`${base_URL}/Blog/${params?.id}`)
      },
      {
        path: '/wishlist',
        element: <MedWishList></MedWishList>
      },
      {
        path: '/checkout',
        element: <CheckoutPage></CheckoutPage>
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
      },
      {
        path: '/dashboard/dochistory',
        element: <DoctorHistory></DoctorHistory>
      },
      {
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
      {
        path: '/dashboard/addpatient',
        element: <PatientRegister></PatientRegister>
      }, {
        path: '/dashboard/comde',
        element: <ComDesh></ComDesh>
      },
      {
        path: '/dashboard/docque',
        element: <DoctorQue></DoctorQue>
      },
      {
        path: '/dashboard/comregister',
        element: <CompanyRegister></CompanyRegister>
      },
      {
        path: '/dashboard/allpateint',
        element: <AllPatient></AllPatient>
      },
      {
        path: '/dashboard/companys',
        element: <AllCompany></AllCompany>
      },
      {
        path: '/dashboard/orders',
        element: <Orders />
      },
      {
        path: '/dashboard/doctorvisiting',
        element: <DoctorVisiting />
      },
      {
        path: '/dashboard/doctorvisiting/:id',
        element: <DoctorVisitingDetails />
      },
      {
        path: '/dashboard/allmedicine',
        element: <AllMedicine></AllMedicine>
      },
      {
        path: '/dashboard/allblog',
        element: <AllBlog></AllBlog>
      },
      {
        path: '/dashboard/myorder',
        element: <MyOrder></MyOrder>
      }

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
