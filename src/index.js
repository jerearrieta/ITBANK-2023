import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Login from './views/Autenticacion/Login';
import Registro from './views/Autenticacion/Registro';
import Home from './views/Home';
import Cuentas from './views/Cuentas';
import Transferencias from './views/Transferencias';
import Prestamos from './views/Prestamos';
import Convertidor from './views/Convertidor';
import Calculadora from './views/Calculadora';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './custom.scss';


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registro",
    element: <Registro />
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "cuentas",
        element: <Cuentas />
      },
      {
        path: "transferencias",
        element: <Transferencias />
      },
      {
        path: "prestamos",
        element: <Prestamos />
      },
      {
        path: "convertidor",
        element: <Convertidor />
      },
      {
        path: "calculadora",
        element: <Calculadora />
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
