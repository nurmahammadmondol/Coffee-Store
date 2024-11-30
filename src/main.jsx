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
import Info from './Components/Main/Feetback/Info.jsx';
import Order from './Components/Main/Order/Order.jsx';
import Shop from './Components/Main/Shop/Shop.jsx';

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
    loader: ({ params }) => fetch(`http://localhost:1000/coffees/${params.id}`),
  },
  {
    path: '/Coffees',
    element: <Coffees></Coffees>,
  },
  {
    path: '/Feedback',
    element: <Info></Info>,
  },
  {
    path: '/Order',
    element: <Order></Order>,
  },
  {
    path: '/Shop',
    element: <Shop></Shop>,
  },
  {
    path: '/Details/:id',
    element: <Details></Details>,
    loader: ({ params }) => fetch(`http://localhost:1000/coffees/${params.id}`),
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
