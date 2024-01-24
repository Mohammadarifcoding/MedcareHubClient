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






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/doctors',
        element:<Doctors></Doctors>
      },
      {
        path:'/medicines',
        element:<Medicines></Medicines>
      }
    ]
  },
]);


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AuthProvider>
      <div className='bg-[#EEF2FB]'>
      <RouterProvider router={router} />
      </div>
      </AuthProvider>
    </React.StrictMode>)
  
} else {
  // handle the case when the element with id 'root' is not found
  render(<div>Root elemeent Not found</div>,document.body)
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
