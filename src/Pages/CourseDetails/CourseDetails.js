import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const CourseDetails = () => {
    const CourseDetails = useLoaderData();
    console.log(CourseDetails);
    return (
      <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto mt-6">
        <div className="col-span-1  ">
            {
                
            }
        </div>

      </div>
    );
};

export default CourseDetails;