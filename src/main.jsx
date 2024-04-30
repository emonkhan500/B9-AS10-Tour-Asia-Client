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
import UpdateSpot from './components/UpdateSpot/UpdateSpot.jsx';
import ShowDetails from './components/ShowDetails/ShowDetails.jsx';
import SubCountry from './components/SubCountry/SubCountry.jsx';
import CountrySpot from './components/CountrySpot/CountrySpot.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
         loader:()=>fetch('http://localhost:5000/spot'),
        //  loader:()=>fetch('http://localhost:5000/countries')

      },
      {
        path:'/allspot',
        element:<PrivateRoute><AllSpot></AllSpot></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/spot')
      },
      {
        path:'/addspot',
        element:<PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path:'/mylist',
        element:<PrivateRoute><MyList></MyList></PrivateRoute>,
        
      },
      
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    {
      path:'/update/:id',
      element:<UpdateSpot></UpdateSpot>,
      loader:({params})=>fetch(`http://localhost:5000/spot/${params.id}`)
    },
    {
      path:'/spotDetails/:id',
      element:<PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>,
      loader:()=>fetch('http://localhost:5000/spot')
    },
    {
      path:'/countries/:country',
      element:<CountrySpot></CountrySpot>,
      loader:({params})=>fetch(`http://localhost:5000/countries/${params.country}`)
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
