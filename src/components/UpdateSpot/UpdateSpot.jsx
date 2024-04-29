import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateSpot = () => {
    const spots =useLoaderData()
    const{_id, image, spot,country,location, description,cost, season, travel, visitor ,email,name}=spots
const navigate= useNavigate()

const handleUpdate=e=>{
    e.preventDefault();
    const image = e.target.image.value;
    const spot = e.target.spot.value;
    const country = e.target.country.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const cost = e.target.cost.value;
    const season = e.target.season.value;
    const travel = e.target.travel.value;
    const visitor = e.target.visitor.value;
    
   
    const place = { image, spot,country,location, description,cost, season, travel, visitor };
    console.log(place);

     // send data to server
     fetch(`http://localhost:5000/spot/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(place)
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount){
            Swal.fire({
              title: 'Success!',
              text: 'spot updated successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
           navigate('/mylist')
          }
    })
}

    return (
         <div className="bg-gray-100 p-6 mt-11 md:p-12">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-cyan-300">Update a Tourist Spot</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-8">
          <label className="block mb-2">Image URL</label>
          <input defaultValue={image} type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Tourists Spot Name</label>
          <input defaultValue={spot} type="text" name="spot" placeholder="tourists_spot_name" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Country Name</label>
          <input defaultValue={country} type="text" name="country" placeholder="country_Name" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Location</label>
          <input defaultValue={location} type="text" name="location" placeholder="location" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Short Description</label>
          <input defaultValue={description} type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Average Cost</label>
          <input defaultValue={cost} type="text" name="cost" placeholder="average_cost" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Season</label>
          <input defaultValue={season} type="text" name="season" placeholder="season" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Travel Time</label>
          <input defaultValue={travel} type="text" name="travel" placeholder="travel_time" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Total Visitow Per Year</label>
          <input defaultValue={visitor} type="text" name="visitor" placeholder="totaVisitorsPerYear" className="input input-bordered w-full" />
        </div>
       
        
       
        <button type="submit" className="btn btn-block btn-success">Update Spot</button>
      </form>
    </div>
    );
};

export default UpdateSpot;