import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import SuapRedirect from './pages/auth/suapRedirect';
import Vehicle from './pages/vehicles/vehicle';
import SellVehicle from './pages/vehicles/sell';
import ShowVehicle from './pages/vehicles/show';
import Chat from './pages/chat/chat';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/suap/redirect",
    element: <SuapRedirect />
  },
  {
    path: "/vehicles",
    element: <Vehicle />
  },
  {
    path: "/sell",
    element: <SellVehicle />
  },
  {
    path: '/show/:id',
    element: <ShowVehicle />
  },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: '/chat/:userId',
    element: <Chat />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
