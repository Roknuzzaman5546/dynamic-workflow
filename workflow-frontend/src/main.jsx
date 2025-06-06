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
import ProtectedRoute from './Components/ProtectedRoute';
import CreateRoleForm from './Pages/Role/CreateRoleForm';
import AdminDash from './Pages/Dashboard/AdminDashboard/AdminDash';
import DashLayout from './DashLayout/DashLayout';
import UserRole from './Pages/Dashboard/AdminDashboard/UserRole';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserDash from './Pages/Dashboard/UserDashboard/UserDash';
const queryClient = new QueryClient()

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
    element: <ProtectedRoute><DashLayout></DashLayout></ProtectedRoute>,
    children: [
      {
        path: 'admindash',
        element: <AdminDash></AdminDash>
      },
      {
        path: 'userDash',
        element: <UserDash></UserDash>
      },
      {
        path: 'userRole',
        element: <UserRole></UserRole>
      },
      {
        path: `createrole/:id`,
        element: <CreateRoleForm></CreateRoleForm>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className=' font-sans'>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </QueryClientProvider>
  </StrictMode >,
)
