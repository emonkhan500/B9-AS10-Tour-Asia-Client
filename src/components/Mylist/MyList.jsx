import React, { useEffect } from 'react';

const MyList = () => {
  useEffect(()=>{
    document.title='My List'
},[])
    return (
        <div>
          <h1>this is my list page</h1>  
        </div>
    );
};

export default MyList;