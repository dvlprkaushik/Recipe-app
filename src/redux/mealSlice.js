import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
  name: "meals",
  initialState: {
    meals: [],
    selectedMeal: null,
    loading: false,
    searchQuery: "",
  },
  reducers: {
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSelectedMeal: (state, action) => {
      state.selectedMeal = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setMeals, setLoading, setSelectedMeal, setSearchQuery } =
  mealSlice.actions;
export default mealSlice.reducer;
