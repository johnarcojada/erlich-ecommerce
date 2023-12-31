import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import CartPage from 'components/pages/CartPage';
import LandingPage from 'components/pages/LandingPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
