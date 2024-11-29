import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddNewCoffee from './Components/AddNewCoffee/AddNewCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';
import Home from './Components/Home/Home.jsx';
import MainPart from './Components/Outlet/MainPart.jsx';
import Details from './Components/Details/Details.jsx';

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
    element: <AddNewCoffee></AddNewCoffee>,
  },
  {
    path: '/UpdateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:1000/coffees/${params.id}`),
  },
  {
    path: '/Details/:id',
    element: <Details></Details>,
    loader: ({ params }) => fetch(`http://localhost:1000/coffees/${params.id}`),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
