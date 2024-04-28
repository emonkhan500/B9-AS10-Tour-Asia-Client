import Banner from "../Banner/Banner";
import Coustomers from "../Coustomer/Coustomers";
import Extra2 from "../Extra2/Extra2";


const Home = () => {
    
    return (
        <div className="mt-10 container mx-auto">
           <Banner></Banner>
           <Extra2></Extra2>
           <Coustomers></Coustomers>
        </div>
    );
};

export default Home;