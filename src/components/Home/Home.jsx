import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Coustomers from "../Coustomer/Coustomers";
import Extra2 from "../Extra2/Extra2";
import { useState } from "react";
import HomeSpotShow from "../HomeSpot/HomeSpotShow";


const Home = () => {
    const lodedSpots= useLoaderData()
    const [spots,setSpots]=useState(lodedSpots.slice(0, 6))
    return (
        <div className="mt-10 container mx-auto">
           <Banner></Banner>
    <div className="mt-12">
        <h1 className="text-4xl font-bold text-gray-500 ">Best Tourist Spot in Asia</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {
spots.map(spotss=><HomeSpotShow spotss={spotss}></HomeSpotShow>)
            }
        </div>
    </div>

           <Extra2></Extra2>
           <Coustomers></Coustomers>
        </div>
    );
};

export default Home;