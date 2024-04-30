import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Coustomers from "../Coustomer/Coustomers";
import Extra2 from "../Extra2/Extra2";
import { useContext, useState } from "react";
import HomeSpotShow from "../HomeSpot/HomeSpotShow";
import { AuthContext } from "../provider/AuthProvider";
import Lottie from "lottie-react";
import reactLottie from '../../../public/lottie.json'
import SubCountry from "../SubCountry/SubCountry";


const Home = () => {
    const lodedSpots= useLoaderData()
    // const countries=useLoaderData()
    
    const {loading}=useContext(AuthContext)
    const [spots,setSpots]=useState(lodedSpots.slice(0, 6))
    if(loading){
        return <Lottie animationData={reactLottie} loop={true} />;
    }
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
    
<Coustomers></Coustomers>
<SubCountry></SubCountry>
           <Extra2></Extra2>
           
        </div>
    );
};

export default Home;