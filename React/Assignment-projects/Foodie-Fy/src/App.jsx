import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://api.spoonacular.com/recipes/complexSearch";

function App() {
  const [inputText, setInputText] = useState("");
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(baseURL);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero setInputText={setInputText} inputText={inputText} />
      <Categories />
    </>
  );
}

export default App;
