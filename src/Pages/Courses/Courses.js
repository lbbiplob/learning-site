import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
    <div className="col-span-3 ">
        <div className="grid grid-cols-2 gap-6">
          {courses.map((course) => (
            <Course key={course.course_id} course={course}></Course>
          ))}
        </div>
      </div>
    );
};

export default Courses;