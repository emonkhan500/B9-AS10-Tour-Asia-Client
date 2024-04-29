import React, { useContext } from 'react';
import {  Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../src/components/provider/AuthProvider';
import Lottie from "lottie-react";
import reactLottie from '../public/lottie.json'
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation();

    if(loading){
        return <Lottie animationData={reactLottie} loop={true} />;
    }
    
        if(user){
            return children;
        }
        return <Navigate state={location.pathname} to='/login'></Navigate>
    };

export default PrivateRoute;