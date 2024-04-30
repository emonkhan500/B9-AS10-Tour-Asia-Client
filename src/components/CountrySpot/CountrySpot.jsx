import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCountrySpots from './ShowCountrySpots';

const CountrySpot = () => {
const countrySpot=useLoaderData()


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-1 container mx-auto mt-10 gap-5">
            {
                countrySpot.map(spot=><ShowCountrySpots spots={spot}></ShowCountrySpots>)
            }
        </div>
    );
};

export default CountrySpot;