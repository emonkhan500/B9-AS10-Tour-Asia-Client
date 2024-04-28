import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSpotShow from './AllSpotShow';

const AllSpot = () => {
    useEffect(()=>{
        document.title='All Tourist Spot'
    },[])


    const spots= useLoaderData()
    return (
        <div className='mt-12'>   
            <h1 className="text-4xl font-bold text-gray-500 ">All Tourist Spot in Asia</h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-12">
        

        {
            spots.map(spot=><AllSpotShow spots={spot}></AllSpotShow>)
        }
    </div>
        </div>
    );
};

export default AllSpot;
