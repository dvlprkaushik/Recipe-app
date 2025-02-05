import React from "react";

const MealDetails = ({ meal }) => {
  return (
    <div className="meal-details">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h4>Instructions:</h4>
      <p>{meal.strInstructions}</p>
      <h4>Ingredients:</h4>
      <ul>
        {Object.keys(meal)
          .filter((key) => key.includes("strIngredient") && meal[key])
          .map((key, index) => (
            <li key={index}>{meal[key]}</li>
          ))}
      </ul>
      <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
        Recipe Source
      </a>
    </div>
  );
};

export default MealDetails;
