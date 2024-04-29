import React from 'react';
import { Link } from 'react-router-dom';

const AllSpotShow = ({spots}) => {
    console.log(spots)
    const { _id,image, spot,country,location, description,cost, season, travel, visitor} = spots;
    return (
      <div data-aos = "fade-down-right" className=" card card-compact w-full  bg-base-100 lg:shadow-xl">
      <figure><img src={image} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{}</h2>
        <div className="flex gap-2">
          <p className="text-xl text-blue-500 font-semibold">#{spot }</p> <p className="text-2xl text-red-600">|</p>
          <p className="text-lg">Country: <span className="font-bold text-green-500 text-xl">{country}</span></p>
        </div>
        <div className="flex mt-3">
          <p className="text-lg"><span className="bg-slate-200 p-1 rounded-lg">Cost:</span><span className="font-bold text-green-500 text-xl">{cost } </span></p> <p className="text-2xl text-red-600">|</p>
          <p className="text-lg "><span className="bg-slate-200 p-1 rounded-lg">Time:</span> <span className="text-sky-600">{travel} </span></p>
        </div>
        <div className="flex items-center mt-3 ">
          <p className="text-xl">Location: <span>{location}</span></p>
          <Link to={`/spotDetails/${_id}`}><button className="btn btn-accent">View Details</button></Link>
        </div>
      </div>
    </div>
    );
};

export default AllSpotShow;