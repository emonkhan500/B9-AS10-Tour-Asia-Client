
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ShowSubCountry from './ShowSubCountry';





const SubCountry = () => {
const[countries,setCountries]=useState([])

useEffect(()=>{
    fetch('https://b9-assignment10-server-ten.vercel.app/countries')
    .then(res=>res.json())
    .then(data =>setCountries(data))
},[])
    
    
    return (
        <div>
             <div className='text-center bg-gray-300 rounded-xl py-4 mt-16 mb-7'>
    <h1 className='text-3xl font-bold text-sky-500' >VISIT SPOT BY COUNTRY</h1>
</div>
<div className="grid grid-cols-1  gap-6 mt-7 md:grid-cols-2 lg:grid-cols-3">
    
{
                countries.map(country=><ShowSubCountry countre={country}></ShowSubCountry>)
            }
</div>
        </div>
    );
};

export default SubCountry;