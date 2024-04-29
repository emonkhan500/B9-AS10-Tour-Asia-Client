import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import ShowMyList from './ShowMyList';

const MyList = () => {
  const[mySpot,setMySpot]=useState([])

  useEffect(()=>{
    document.title='My List'
},[])

const{user}=useContext(AuthContext)
useEffect(()=>{
  fetch(`http://localhost:5000/mylist/${user?.email}`)
  .then(res=>res.json())
  .then(data=>{
    setMySpot(data)
  })
  // console.log('jfdhhf')
},[user])

    return (
        <div>
          <h2 className="mb-4 text-2xl font-semibold leading-tight">Your Spot</h2>
          <table className="w-4/5 p-6  text-xl text-left ">
          <thead>
				<tr className="dark:bg-gray-300">
				
					<th className="p-3">Spot</th>
					<th className="p-3 ml-9">Country</th>
					<th className="p-3">Location</th>
					<th className="p-3">Cost</th>
					
					
				</tr>
			</thead>
      
      </table>
         {
          mySpot.map(spot=><ShowMyList spots={spot}></ShowMyList>)
         } 
          
        </div>
    );
};

export default MyList;