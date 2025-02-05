import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedMeal } from "../redux/mealSlice";

const MealCard = ({ meal, setSelectedMeal }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedMeal(meal));
  };

  return (
    <div className="meal-card" onClick={handleClick}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
    </div>
  );
};

export default MealCard;
