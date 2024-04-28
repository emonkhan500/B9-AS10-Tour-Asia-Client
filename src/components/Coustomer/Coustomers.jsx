import React from 'react';
import thailand from '../../assets/62327-3-1712115352.jpg'
import malaysia from '../../assets/62327-2-1712115430.jpg'
import indonesia from '../../assets/43714-1695693793.jpg'
import vietnam from '../../assets/46-1714146546.jpg'
import cambodia from '../../assets/31-1714148043.jpg'
import bangladesh from '../../assets/images.jpg'
import { IoLocationOutline } from "react-icons/io5";

const Coustomers = () => {
    return (
        <div className='mt-16 ml-20 lg:ml-0 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className=" rounded-xl w-96 bg-base-100 shadow-xl">
  <figure><img className='rounded-t-xl' src={thailand} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex gap-1'>
   <div className='flex items-center gap-2 text-xl '>
   <IoLocationOutline />
   <h2 className="card-title text-2xl ">Chiang Mai,Thailand</h2>
   </div>
   <div><button className='border-red-600 btn btn-outline'> View</button></div>
   </div>
    
  </div>
</div>
          <div className=" rounded-xl w-96 bg-base-100 shadow-xl">
  <figure ><img  className='rounded-t-xl' src={malaysia} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex gap-1'>
   <div className='flex items-center gap-2 text-xl '>
   <IoLocationOutline />
   <h2 className="card-title text-2xl ">Kuala Lumpur,Malaysia</h2>
   </div>
   <div><button className='border-red-600 btn btn-outline'> View</button></div>
   </div>
    
  </div>
</div>
          <div className=" rounded-xl w-96 bg-base-100 shadow-xl">
  <figure><img className='rounded-t-xl' src={indonesia} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex gap-1'>
   <div className='flex items-center gap-2 text-xl '>
   <IoLocationOutline />
   <h2 className="card-title text-2xl ">Island,Indonesia</h2>
   </div>
   <div><button className='border-red-600 btn btn-outline'> View</button></div>
   </div>
    
  </div>
</div>
          <div className=" rounded-xl w-96 bg-base-100 shadow-xl">
  <figure><img className='rounded-t-xl' src={vietnam} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex gap-1'>
   <div className='flex items-center gap-2 text-xl '>
   <IoLocationOutline />
   <h2 className="card-title text-2xl ">Quang Tri,Vietnam</h2>
   </div>
   <div><button className='border-red-600 btn btn-outline'> View</button></div>
   </div>
    
  </div>
</div>
          <div className=" rounded-xl w-96 bg-base-100 shadow-xl">
  <figure><img className='rounded-t-xl' src={cambodia} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex gap-1'>
   <div className='flex items-center gap-2 text-xl '>
   <IoLocationOutline />
   <h2 className="card-title text-2xl ">Green Village,Cambodia</h2>
   </div>
   <div><button className='border-red-600 btn btn-outline'> View</button></div>
   </div>
    
  </div>
</div>
          <div className=" rounded-xl w-96 bg-base-100 shadow-xl">
  <figure><img className='rounded-t-xl h-[380px] w-[545px]' src={bangladesh} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex gap-1'>
   <div className='flex items-center gap-2 text-xl '>
   <IoLocationOutline />
   <h2 className="card-title text-2xl ">Sundarban,Bangladesh</h2>
   </div>
   <div><button className='border-red-600 btn btn-outline'> View</button></div>
   </div>
    
  </div>
</div>
        </div>
    );
};

export default Coustomers;