import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddNewCoffee from './Components/AddNewCoffee/AddNewCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';
import Home from './Components/Home/Home.jsx';
import MainPart from './Components/Outlet/MainPart.jsx';
import Details from './Components/Details/Details.jsx';
import Login from './Components/Sign/Login.jsx';
import Registration from './Components/Sign/Registration.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import PrivetRoute from './Route/PrivetRoute.jsx';
import Coffees from './Components/Main/AllCoffee/Coffees.jsx';
import Order from './Components/Main/Order/Order.jsx';
import User from './Components/Main/Users/User.jsx';
import About from './Components/Main/About/About.jsx';
import Contect from './Components/Main/Contect/Contect.jsx';
import Contact from './Components/Main/Contect/Contect.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <h4>Error 404</h4>,
    children: [
      {
        path: '/',
        element: <MainPart></MainPart>,
      },
      {
        path: '/Coffees',
        element: (
          <PrivetRoute>
            <Coffees></Coffees>
          </PrivetRoute>
        ),
      },

      {
        path: '/Users',
        element: (
          <PrivetRoute>
            <User></User>
          </PrivetRoute>
        ),
      },
      {
        path: '/Order',
        element: (
          <PrivetRoute>
            <Order></Order>
          </PrivetRoute>
        ),
      },
      {
        path: '/About',
        element: <About></About>,
      },
      {
        path: '/Contact',
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: '/AddNewCoffee',
    element: (
      <PrivetRoute>
        <AddNewCoffee></AddNewCoffee>
      </PrivetRoute>
    ),
  },
  {
    path: '/UpdateCoffee/:id',
    element: (
      <PrivetRoute>
        <UpdateCoffee></UpdateCoffee>
      </PrivetRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://coffee-shop-server-site-five.vercel.app/coffees/${params.id}`
      ),
  },

  {
    path: '/Details/:id',
    element: <Details></Details>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-shop-server-site-five.vercel.app/coffees/${params.id}`
      ),
  },
  {
    path: '/Login',
    element: <Login></Login>,
  },
  {
    path: '/Registration',
    element: <Registration></Registration>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
