import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import DashboardLayout from './Components/Dashboard/Layout/DashboardLayout.tsx';
import AllBlog from './Components/Dashboard/Pages/AllBlog/AllBlog.tsx';
import AllMedicine from './Components/Dashboard/Pages/AllMedicine/AllMedicine.tsx';
import AllUser from './Components/Dashboard/Pages/AllUser.tsx';
import AllCompany from './Components/Dashboard/Pages/CompanyRegister/AllCompany.tsx';
import CompanyRegister from './Components/Dashboard/Pages/CompanyRegister/CompanyRegister.tsx';
import DocStatus from './Components/Dashboard/Pages/DocStatus/DocStatus.tsx';
import DoctorHistory from './Components/Dashboard/Pages/DoctorHistory/DoctorHistory.tsx';
import DoctorVisiting from './Components/Dashboard/Pages/DoctorVisiting/DoctorVisiting.jsx';
import DoctorVisitingDetails from './Components/Dashboard/Pages/DoctorVisiting/DoctorVisitingDetails.jsx';
import ForumAllPost from './Components/Dashboard/Pages/Forum/ForumAllPost.tsx';
import MyOrder from './Components/Dashboard/Pages/MyOrder/MyOrder.tsx';
import Orders from './Components/Dashboard/Pages/Orders/Orders.jsx';
import AllPatient from './Components/Dashboard/Pages/Patient/AllPatient.tsx';
import PatientRegister from './Components/Dashboard/Pages/Patient/PatientRegister/PatientRegister.tsx';
import AddProduct from './Components/Dashboard/Pages/ProductPages/AddProduct.tsx';
import MyProduct from './Components/Dashboard/Pages/ProductPages/MyProduct.tsx';
import UpdateProduct from './Components/Dashboard/Pages/ProductPages/UpdateProduct.tsx';
import Profile from './Components/Dashboard/Pages/Profile/Profile.tsx';
import CompanyProduct from './Components/Dashboard/companyProduct/CompanyProduct.tsx';
import Forum from './Components/Forum/Forum.tsx';
import Layout from './Components/Layout/Layout.tsx';
import AboutUs from './Components/Pages/About/AboutUs.tsx';
import Blog from './Components/Pages/Blogs/Blog.tsx';
import BlogDetails from './Components/Pages/Blogs/BlogDetails.jsx';
import MyBlog from './Components/Pages/Blogs/MyBlog.tsx';
import Cart from './Components/Pages/Cart/Cart.tsx';
import CheckoutPage from './Components/Pages/CheckOut/CheckoutPage.tsx';
import CompanyDetails from './Components/Pages/CompanyDetails/CompanyDetails.tsx';
import ContactPage from './Components/Pages/Contact/ContactPage.tsx';
import CreateDoctor from './Components/Pages/CreateDoctors/CreateDoctor.tsx';
import MedicienDetails from './Components/Pages/Detailsofmediciens/MedicienDetails.tsx';
import DoctorDetails from './Components/Pages/Doctors/DoctorCard/DoctorDetails.tsx';
import DoctorQue from './Components/Pages/Doctors/DoctorQue.tsx';
import Doctors from './Components/Pages/Doctors/Doctors.tsx';
import Home from './Components/Pages/Home/Home.tsx';
import Login from './Components/Pages/Login/Login.tsx';
import MedWishList from './Components/Pages/Medicines/MedicinItem/MedWishList.tsx';
import { MedicineProvider } from './Components/Pages/Medicines/MedicineContext/MedicineContext.tsx';
import Medicines from './Components/Pages/Medicines/Medicines.tsx';
import Register from './Components/Pages/Register/Register.tsx';
import AdminRoute from './Components/Route/AdminRoute.tsx';
import CompanyRoute from './Components/Route/CompanyRoute.tsx';
import DoctorRoute from './Components/Route/DoctorRoute.tsx';
import PatientRoute from './Components/Route/PatientRoute.tsx';
import PrivateRoute from './Components/Route/PrivateRoute.tsx';
import UserRoute from './Components/Route/UserRoute.tsx';
import ComDesh from './Components/companyDash/ComDesh.tsx';
import Testing from './Components/designTest/Testing.tsx';
import AuthProvider from './Providers/AuthProvider/AuthProvider.tsx';
import reportWebVitals from './reportWebVitals';
import { base_URL } from './utills/BaseURL.ts';
import Meeting from './Components/Dashboard/Pages/Meeting/Meeting.tsx';
import MeetingRoom from './Components/Dashboard/Pages/Meeting/MeetingRoom/MeetingRoom.tsx';


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
        element: <ContactPage></ContactPage>
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
        element: <AboutUs></AboutUs>
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
        loader: ({ params }) => fetch(`https://medcarehubserverwebsite.vercel.app/detailsMed/${params?.id}`)
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
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>
      },
      {
        path: '/dashboard/dochistory',
        element: <DoctorRoute><DoctorHistory></DoctorHistory></DoctorRoute>
      },
      {
        path: '/dashboard/docstatus',
        element: <DoctorRoute><DocStatus></DocStatus></DoctorRoute>
      }, {
        path: '/dashboard/comproduct',
        element: <CompanyRoute><CompanyProduct></CompanyProduct></CompanyRoute>
      },
      {
        path: '/dashboard/alluser',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path: '/dashboard/myblog',
        element: <MyBlog></MyBlog>
      },
      {
        path: '/dashboard/addproduct',
        element: <CompanyRoute><AddProduct></AddProduct></CompanyRoute>
      },
      {
        path: '/dashboard/myproduct',
        element: <CompanyRoute><MyProduct></MyProduct></CompanyRoute>
      },
      {
        path: '/dashboard/updateproduct/:id',
        element: <CompanyRoute><UpdateProduct></UpdateProduct></CompanyRoute>
      },
      {
        path: '/dashboard/addpatient',
        element: <UserRoute><PatientRegister></PatientRegister></UserRoute>
      }, {
        path: '/dashboard/comde',
        element: <CompanyRoute><ComDesh></ComDesh></CompanyRoute>
      },
      {
        path: '/dashboard/docque',
        element: <AdminRoute><DoctorQue></DoctorQue></AdminRoute>
      },
      {
        path: '/dashboard/comregister',
        element: <UserRoute><CompanyRegister></CompanyRegister></UserRoute>
      },
      {
        path: '/dashboard/allpateint',
        element: <DoctorRoute><AllPatient></AllPatient></DoctorRoute>
      },
      {
        path: '/dashboard/companys',
        element: <AdminRoute><AllCompany></AllCompany></AdminRoute>
      },
      {
        path: '/dashboard/orders',
        element: <AdminRoute><Orders /></AdminRoute>
      },
      {
        path: '/dashboard/doctorvisiting',
        element: <PatientRoute><DoctorVisiting /></PatientRoute>
      },
      {
        path: '/dashboard/doctorvisiting/:id',
        element: <PatientRoute><DoctorVisitingDetails /></PatientRoute>
      },
      {
        path: '/dashboard/allmedicine',
        element: <AdminRoute><AllMedicine></AllMedicine></AdminRoute>
      },
      {
        path: '/dashboard/allblog',
        element: <AllBlog></AllBlog>
      },
      {
        path: '/dashboard/myorder',
        element: <MyOrder></MyOrder>
      },
      {
        path: '/dashboard/forum',
        element: <ForumAllPost></ForumAllPost>
      },
      {
        path: '/dashboard/meeting',
        element: <Meeting></Meeting>
      },
      {
        path: '/dashboard/meetingRoom/:code',
        element:<MeetingRoom></MeetingRoom>
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
