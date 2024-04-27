import React, { useEffect } from 'react';

const AllSpot = () => {
    useEffect(()=>{
        document.title='All Tourist Spot'
    },[])
    return (
        <div>
            <h1>this is All spot</h1>
        </div>
    );
};

export default AllSpot;