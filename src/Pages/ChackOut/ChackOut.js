import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ChackOut = () => {
    const checkoutDetails = useLoaderData();
    const {  image_url, price, teacher,  title, } = checkoutDetails;

    const handelCheckOutMassage=()=>{
       
    }
    return (
      <div className="w-4/6 mx-auto mt-16">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-3/6">
            <img className="" src={image_url} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h3 className="text-lg font-semibold">Teacher: {teacher}</h3>
            <h3 className="text-lg font-semibold">Price: ${price}</h3>
            <p>If you want to access this course please checkout </p>
            <div className="card-actions justify-end">
              <button
                onClick={handelCheckOutMassage}
                className="btn btn-primary"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      
      </div>
    );
};

export default ChackOut;