import React from 'react';

const Course = ({ course }) => {
    const { details, image_url, title, teacher, rating , price} = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h4 className="font-semibold">Teacher: {teacher}</h4>
        <p>{details.slice(0, 100) + "...."}</p>
        <div className="card-actions justify-end items-center">
          <p className="text-blue-700 font-bold">Ratting: {rating?.number}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;