import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const AddSpot = () => {
    useEffect(()=>{
        document.title='Add Tourist Spot'
    },[])

const{user}=useContext(AuthContext)
const navigate=useNavigate()

    const handleAddSpot = (e) => {
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
        const email= e.target.email.value;
        const name = e.target.name.value;
        const place = { image, spot,country,location, description,cost, season, travel, visitor ,email,name};
        console.log(place);
    
        // send data to server
        fetch('http://localhost:5000/spot',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(place)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                  title: 'Success!',
                  text: 'spot added successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
               navigate('/')
              }
        })
        
      };


    return (
        <div className="bg-gray-100 p-6 mt-11 md:p-12">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-cyan-300">Add a Tourist Spot</h2>
      <form onSubmit={handleAddSpot}>
        <div className="mb-8">
          <label className="block mb-2">Image URL</label>
          <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Tourists Spot Name</label>
          <input type="text" name="spot" placeholder="tourists_spot_name" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Country Name</label>
          <input type="text" name="country" placeholder="country_Name" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Location</label>
          <input type="text" name="location" placeholder="location" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Short Description</label>
          <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Average Cost</label>
          <input type="text" name="cost" placeholder="average_cost" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Season</label>
          <input type="text" name="season" placeholder="season" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Travel Time</label>
          <input type="text" name="travel" placeholder="travel_time" className="input input-bordered w-full" />
        </div>
        <div className="mb-8">
          <label className="block mb-2">Total Visitow Per Year</label>
          <input type="text" name="visitor" placeholder="totaVisitorsPerYear" className="input input-bordered w-full" />
        </div>
        <div><h2 className="text-3xl font-extrabold text-center mb-8 text-cyan-300">User Info</h2></div>
        <div className="mb-8">
          <label className="block mb-2">User Email</label>
          <input type="text" name="email" value={user.email} className="input input-bordered w-full" final />
        </div>
        <div className="mb-8">
          <label className="block mb-2">User Name</label>
          <input type="text" name="name" value={user.displayName} className="input input-bordered w-full"  />
        </div>
        <button type="submit" className="btn btn-block btn-success">Add Spot</button>
      </form>
    </div>
    );
};

export default AddSpot;