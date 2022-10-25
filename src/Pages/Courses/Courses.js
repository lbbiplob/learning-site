import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Category from '../Category/Category';

const Courses = () => {
    const [categories , setCategories] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:5000/category")
          .then((res) => res.json())
          .then((data) => setCategories(data));
    },[])
    return (
      <div class="grid grid-cols-3 gap-4 max-w-7xl mx-auto mt-6">
        <div class="col-span-1 menu bg-base-100 w-60 rounded-box ">
          {categories.length &&
            categories.map((category) => (
              <Category key={category.id} category={category}></Category>
            ))}
        </div>
        <div class="col-span-2 "></div>
      </div>
    );
};

export default Courses;