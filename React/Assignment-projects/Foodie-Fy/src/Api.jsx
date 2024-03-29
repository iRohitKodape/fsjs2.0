import axios from "axios";

// fetch meals
export const fetchDetails = async (query) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const { meals } = response.data;
    console.log(meals);
    return meals;
  } catch (error) {
    console.error(error);
  }
};

export const fetchByCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const obj = response.data.meals;
    console.log(obj);
    return obj;
  } catch (error) {
    console.log(error);
  }
};

export const fetchById = async (id) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const mealObj = response.data.meals[0];
    console.log(mealObj);
    return mealObj;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMealByName = async (text) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );
    const data = res.data;
    return data;
    console.log(data);
  } catch (error) {
    throw new error(error);
  }
};
