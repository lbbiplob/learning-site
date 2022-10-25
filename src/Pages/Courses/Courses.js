import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Course from '../Course/Course';

const Courses = () => {
    const [categories , setCategories] = useState([]);
    const courses = useLoaderData();
    

    useEffect(()=>{
        fetch("http://localhost:5000/category")
          .then((res) => res.json())
          .then((data) => setCategories(data));
    },[])
    return (
      <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto mt-6">
        <div className="col-span-1 menu bg-base-100 w-60 rounded-box ">
          {categories.length &&
            categories.map((category) => (
              <Category key={category.id} category={category}></Category>
            ))}
        </div>
        <div className="col-span-3 ">
          <div className="grid grid-cols-2 gap-6">
            {courses.map((course) => (
              <Course key={course.course_id} course={course}></Course>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Courses;