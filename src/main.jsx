import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import AllSpot from './components/ALLSpot/AllSpot.jsx';
import AddSpot from './components/AddSpot/AddSpot.jsx';
import MyList from './components/Mylist/MyList.jsx';

import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './components/provider/AuthProvider.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/allspot',
        element:<AllSpot></AllSpot>

      },
      {
        path:'/addspot',
        element:<PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path:'/mylist',
        element:<PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <AuthProvider>
  <RouterProvider router={router} />
   <ToastContainer></ToastContainer>

  </AuthProvider>
  </React.StrictMode>,
)
