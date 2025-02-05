import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setMeals,
  setLoading,
  setSelectedMeal,
  setSearchQuery,
} from "./redux/mealSlice";
import MealCard from "./components/MealCard";
import MealDetails from "./components/MealDetails";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import RandomMeal from "./components/RandomMeal";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.meals);
  const selectedMeal = useSelector((state) => state.meals.selectedMeal);
  const loading = useSelector((state) => state.meals.loading);
  const searchQuery = useSelector((state) => state.meals.searchQuery);

  const fetchMeals = async (query = "") => {
    dispatch(setLoading(true));
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    try {
      const response = await axios.get(url);
      dispatch(setMeals(response.data.meals || []));
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchMealsByCategory = async (category) => {
    dispatch(setLoading(true));
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    try {
      const response = await axios.get(url);
      dispatch(setMeals(response.data.meals || []));
    } catch (error) {
      console.error("Error fetching meals by category:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchMealsByIngredient = async (ingredient) => {
    dispatch(setLoading(true));
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try {
      const response = await axios.get(url);
      dispatch(setMeals(response.data.meals || []));
    } catch (error) {
      console.error("Error fetching meals by ingredient:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchMeals(searchQuery);
  }, [searchQuery]);

  return (
    <div className="app-container">
      <header>
        <h1 className="app-title">Recipe Finder</h1>
      </header>

      <SearchBar onSearch={fetchMeals} />
      <div className="filters">
        <CategoryFilter onCategorySelect={fetchMealsByCategory} />
        <input
          type="text"
          placeholder="Search by Ingredient"
          onChange={(e) => {
            fetchMealsByIngredient(e.target.value);
          }}
        />
        <RandomMeal onFetchRandomMeal={fetchMeals} />
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="meal-list">
          {meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              setSelectedMeal={(meal) => dispatch(setSelectedMeal(meal))}
            />
          ))}
        </div>
      )}

      {selectedMeal && <MealDetails meal={selectedMeal} />}
    </div>
  );
};

export default App;
