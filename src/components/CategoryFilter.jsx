import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryFilter = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
      const response = await axios.get(url);
      setCategories(response.data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-filter">
      <label>Filter by Category   :    </label>
      <select onChange={(e) => onCategorySelect(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.strCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
