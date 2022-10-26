import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { details, image_url, title, teacher, rating , price, id} = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h4 className="font-semibold">Teacher: {teacher}</h4>
        <p>{details.slice(0, 100) + "...."}</p>
        <div className="card-actions flex justify-between items-center">
          <p className="text-blue-700 font-bold">Ratting: {rating?.number}</p>
          <h3 className="text-blue-700 font-bold ml-3">Price:${price}</h3>
        </div>
        <div>
          <Link className="btn btn-primary w-full">Buy Now</Link>
        </div>
        <div className="mx-auto">
          <Link to={`/courses/${id}`} className="btn btn-primary ">
            Course Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;