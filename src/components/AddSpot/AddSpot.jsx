import React, { useEffect } from 'react';

const AddSpot = () => {
    useEffect(()=>{
        document.title='Add Tourist Spot'
    },[])
    return (
        <div>
            <h1>this is Add spot</h1>
        </div>
    );
};

export default AddSpot;