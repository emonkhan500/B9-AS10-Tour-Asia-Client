import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MyList = () => {
  const[mySpot,setMySpot]=useState([])

  useEffect(()=>{
    document.title='My List'
},[])

const{user}=useContext(AuthContext)
useEffect(()=>{
  fetch(`https://b9-assignment10-server-ten.vercel.app/mylist/${user?.email}`)
  .then(res=>res.json())
  .then(data=>{
    setMySpot(data)
  })
  // console.log('jfdhhf')
},[user])

const handleDelete = _id =>{
  console.log(_id)
  
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  
  
    }).then((result) => {
    if (result.isConfirmed) {
       fetch(`https://b9-assignment10-server-ten.vercel.app/spot/${_id}`,{
        method:'DELETE'
       })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
  
        if (data.deletedCount > 0) {
          Swal.fire(
          'Deleted!',
          'Your spot has been deleted.',
          'success'
          )
         window.location.reload()
        }
      });
    }
    });
  }
  

    return (
        <div>
          <h2 className="mb-4 text-2xl font-semibold leading-tight">Your Spot</h2>
        
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th className='text-2xl font-bold'>Spot</th>
        <th className='text-2xl font-bold'>Country</th>
        <th className='text-2xl font-bold'>Location</th>
        <th className='text-2xl font-bold'>Cost</th>
      </tr>
    </thead>
    <tbody>
     
    {
          mySpot?.map(spot=> <tr>
           
            <td>{spot?.spot}</td>
            <td>{spot?.country}</td>
            <td>{spot?.location}</td>
          <td>{spot.cost}</td>
          <td className="px-3 py-2">
						<Link to={`/update/${spot._id}`}><button type="button" title="Open details" className=" btn rounded-xl">
							Update
						</button></Link>
                        <button onClick={()=>handleDelete(spot._id)} className=" btn rounded-xl"> Delete</button>
					</td>
          </tr>)
         } 
      
      
    </tbody>
  </table>
</div>
         
          
        </div>
    );
};

export default MyList;