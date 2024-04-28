import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../provider/AuthProvider';

const Nav = () => {
const [theme,setTheme]=useState('light')

useEffect(()=>{
  localStorage.setItem('theme',theme)
  const localTheme=localStorage.getItem('theme')
  document.querySelector('html').setAttribute('data-theme',localTheme)
},[theme])

const handleToggle=e=>{
  if(e.target.checked){
    setTheme('dark')
  }
  else{
    setTheme('light')
  }
}
// console.log(theme)
const {user,logOut}=useContext(AuthContext)
// console.log(user)

const handleSignOut=()=>{
  logOut()
  .then()
  .catch(error=>{
    console.error(error)
  })
}

    const links=<>
<li className='text-xl' ><NavLink  to='/'>Home</NavLink></li>
<li className='text-xl'><NavLink to='/allspot'>All Tourists Spot </NavLink></li>
<li className='text-xl'><NavLink to='/addspot'>Add Tourists Spot </NavLink></li>
<li className='text-xl'><NavLink to='/mylist'>My List </NavLink></li>

</>
    return (
  
    
    <div>
         <div className="navbar container mx-auto text-fuchsia-400 text-xl  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[40] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
      </ul>
    </div>
    <div className='flex gap-2 items-center animate__animated animate__bounce '>
    <img className='h-9 w-9' src={logo} alt="" />
    <a className="font-bold  text-2xl  "><span className='text-red-600'><span className='text-3xl text-black'>T</span ><span className='text-lg'>OUR</span></span> <span className='text-3xl text-black'>A</span><span className='text-lg'>SIA</span></a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="w-10 mr-2 rounded-full">
          <img title={user?.displayName || 'No User'} className="rounded-2xl" alt="" src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
        </div>
  
        
          
        {
          user?<>
          
<Link onClick={handleSignOut}> <button className="btn text-fuchsia-500">Sign Out</button></Link>
</> :
<div>
<Link to='/login'> <button className="btn text-fuchsia-500">Login</button></Link>
<Link to='/register'> <button className="btn text-fuchsia-500">Register</button></Link>
</div>
        }
        
  </div>
  <label className="cursor-pointer grid place-items-center ml-3">
  <input onChange={handleToggle} type="checkbox"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</div>
    </div>
    );
};

export default Nav;