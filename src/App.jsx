import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './ui/Loader';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import { loader as menuLoader } from './features/menu/Menu';
import { action as createOrderAction } from './features/order/CreateOrder';
import { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';

const Home = lazy(() => import('./ui/Home'));
const Menu = lazy(() => import('./features/menu/Menu'));
const Cart = lazy(() => import('./features/cart/Cart'));
const CreateOrder = lazy(() => import('./features/order/CreateOrder'));
const Order = lazy(() => import('./features/order/Order'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
