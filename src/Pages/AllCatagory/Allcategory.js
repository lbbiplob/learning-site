import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Allcategory = () => {
      const [categories, setCategories] = useState([]);
      

      useEffect(() => {
        fetch("https://backend-assingment-10.vercel.app/category")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);
    return (
      <div className="lg:col-span-1 sm:grid-col-1 menu bg-base-100 w-60 rounded-box ">
        {categories.length &&
          categories.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
      </div>
    );
};

export default Allcategory;