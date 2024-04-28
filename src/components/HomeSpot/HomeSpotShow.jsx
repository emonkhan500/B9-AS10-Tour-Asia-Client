import React from "react";

const HomeSpotShow = ({ spotss }) => {
  console.log(spotss);
  const { image, spot, location, country, cost } = spotss;
  console.log(image);
  console.log(spotss.image);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={spotss.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{spot}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSpotShow;
