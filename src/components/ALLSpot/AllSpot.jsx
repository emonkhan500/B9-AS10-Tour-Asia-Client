import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSpotShow from './AllSpotShow';

const AllSpot = () => {
    useEffect(()=>{
        document.title='All Tourist Spot'
    },[])


    const lodedSpots= useLoaderData()
    const[spots,setSpots]=useState(lodedSpots)

    const handleSort = (sortCriteria) => {
        console.log(sortCriteria)
        let sortedSpot = [...spots];
    
        if (sortCriteria === "cost") {
            sortedSpot.sort((a, b) => b.cost - a.cost);
        } 
        // Update the state with sorted spots
        setSpots(sortedSpot);
    };

    return (
        <div className='mt-12'>   
            <h1 className="text-4xl mb-6 font-bold text-gray-500 ">All Tourist Spot in Asia</h1>
            <div className='text-center'><details className="dropdown ">
               <summary className="m-1 px-6 py-3 rounded-lg bg-[#23BE0A] hover:bg-[#23BE0Aac] active:scale-95 text-white text-lg font-semibold">Sort By</summary>
               <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                   <li onClick={() => handleSort("cost")}><a>Average Cost</a></li>
                   
               </ul>
           </details></div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-12">
           

        {
            spots.map(spot=><AllSpotShow spots={spot}></AllSpotShow>)
        }
    </div>
        </div>
    );
};

export default AllSpot;
