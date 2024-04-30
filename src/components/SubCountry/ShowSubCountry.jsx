import React from 'react';
import { Link } from 'react-router-dom';

const ShowSubCountry = ({countre}) => {
console.log(countre)

    const{country,country_image_url}=countre
    return (
        <section className="p-6 my-6  rounded-lg bg-gray-300 dark:bg-gray-100 dark:text-gray-800">


        <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 ">
        
           <Link to={`/countries/${country}`}> 
           <div className="flex p-4 space-x-4 border border-green-500 bg-amber-100 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                
                <img className="flex justify-center lg:p-2 align-middle rounded-lg  dark:bg-violet-600" src={country_image_url} alt="" />
                
                <div className="flex flex-col justify-center align-middle">
                    <p className='text-2xl font-bold'>{country}</p>
                </div>
            </div></Link>
          
            
            </div>
        
    </section>
    );
};

export default ShowSubCountry;