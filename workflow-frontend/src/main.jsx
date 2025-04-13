import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import LogRegister from './Pages/Authentication/LogRegister';
import { AuthProvider } from './Components/Hooks/AuthContext';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import CreateRoleForm from './Pages/Role/CreateRoleForm';
import AdminDash from './Pages/Dashboard/AdminDash';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2 className=' text-2xl font-sans mt-40 text-center'>This page is not fount :: 404</h2>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/auth',
        element: <LogRegister />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>,
    children:[
      {
        path: 'admindash',
        element: <AdminDash></AdminDash>
      },
      {
        path: 'createrole',
        element: <CreateRoleForm></CreateRoleForm>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' font-sans'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
