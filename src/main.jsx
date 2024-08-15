import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Root/Main.jsx';
import Home from './Componets/Home/Home.jsx';
import About from './Componets/About.jsx';
import ErrorPage from './Componets/Error/ErrorPage.jsx';
import Login from './Componets/Login/Login.jsx';
import Register from './Componets/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './Componets/Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <PrivateRoute> 
           <About></About>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
