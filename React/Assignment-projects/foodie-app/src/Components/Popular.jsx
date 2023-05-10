import { useEffect } from "react";

//https://api.spoonacular.com/recipes/random

const Popular = () => {
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return <div>Popular</div>;
};
export default Popular;
