import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../provider/AuthProvider';

const Nav = () => {
const {user,logOut}=useContext(AuthContext)
console.log(user)

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
         <div className="navbar container mx-auto text-fuchsia-400 text-xl">
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
</div>
    </div>
    );
};

export default Nav;