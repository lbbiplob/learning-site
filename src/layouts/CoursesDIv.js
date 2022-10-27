import React from 'react';
import { Outlet } from 'react-router-dom';
import Allcategory from '../Pages/AllCatagory/Allcategory';

const CoursesDIv = () => {
    return (
      <div className="grid lg:grid-cols-4 grid-cols-1  gap-4 lg:max-w-7xl mx-auto mt-6">
        <Allcategory></Allcategory>
        <Outlet></Outlet>
      </div>
    );
};

export default CoursesDIv;