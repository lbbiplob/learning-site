import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const {name, id} = category;
  return (
    <li>
      <Link to={`/courses/${id}`}>{name}</Link>
    </li>
  );
};

export default Category;
