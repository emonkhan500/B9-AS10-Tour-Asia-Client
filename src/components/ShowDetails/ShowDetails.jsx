import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowDetails = () => {
    const spots =useLoaderData()

    const {id}=useParams()
    console.log(typeof id)
    const selectedSpot=spots?.find((prop)=>prop._id===id)
const { image, spot,country,location, description,cost, season, travel, visitor}=selectedSpot || {}
    return (
        <div className="  bg-base-200 lg:h-[600px] mt-20 container px-6 lg:px-0 mx-auto">
        <div className="flex items-center flex-col lg:flex-row">
          <img  src={image} className=" w-[600px] h-[570px] rounded-lg shadow-2xl" />
          <div className="card-body">
          <h2 className="card-title text-yellow-400 text-4xl mb-8"> -- {spot} !</h2>
          <div className="flex gap-2">
            <p className="text-xl text-blue-500 font-semibold"><span className='text-green-500'>Country </span>{ country}</p> <p className="text-2xl text-red-600">|</p>
            <p className="text-lg">Season: <span className="font-bold text-green-500 text-xl">{season }</span></p>
          </div>
          <div className="flex mt-3">
            <p className="text-lg">Cost:<span className="font-bold text-green-500 text-xl">{cost } </span></p> <p className="text-2xl text-red-600">|</p>
            <p className="text-lg "><span className="bg-slate-200 p-1 rounded-lg">Time:</span> <span className="text-sky-600">{travel}</span></p>
          </div>
          <div className="flex mt-3 ">
            <p className="text-xl">Location: <span className='text-teal-500'>{location}</span></p>
            <p className="text-2xl text-red-600">|</p>
            <p className="text-xl">Visitor: <span className='text-teal-500'>{visitor}</span></p>
      
      </div>
      <p>- <span className='italic font-semibold text-xl'>{description}</span></p>
      
     
        </div>
        </div>
      </div>
    );
};

export default ShowDetails;