import axios from "axios";

const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

// fetch meals
export const fetchDetails = async (query) => {
  try {
    const response = await axios.get(apiURL);
    const { meals } = response.data;
    console.log(meals);
  } catch (error) {
    console.error(error);
  }
};
