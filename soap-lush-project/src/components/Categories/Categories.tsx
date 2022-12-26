import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import products from "../../ProductsCat.json";

function Categories() {
  const categories = products["categories"];
  return (
    <div className="category-container">
      {categories.map((category: any) => (
        <Link to={`/store/${category.id}`} className="category-name">
          {category.name}
        </Link>
      ))}
    </div>
  );
}

export default Categories;
