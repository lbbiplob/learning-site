import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  console.log(category);
  return (
    
     
        <li>
          <Link>{category.name}</Link>
        </li>
      
   
  );
};

export default Category;
