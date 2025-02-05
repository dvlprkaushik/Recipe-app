import React from "react";
import { useDispatch } from "react-redux";
import { setMeals } from "../redux/mealSlice";
import axios from "axios";

const RandomMeal = ({ onFetchRandomMeal }) => {
  const dispatch = useDispatch();

  const fetchRandomMeal = async () => {
    try {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";
      const response = await axios.get(url);
      dispatch(setMeals(response.data.meals || []));
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };

  return (
    <div className="random-meal">
      <button onClick={fetchRandomMeal}>Get Random Meal</button>
    </div>
  );
};

export default RandomMeal;
