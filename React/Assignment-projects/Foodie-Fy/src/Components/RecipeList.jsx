import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchDetails } from "../Api";

function RecipeLists({ setLoader }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("chicken_breast");
  const [data, setData] = useState("");

  const searchRecipe = (searchQuery) => {
    fetchDetails(searchQuery).then((response) => {
      setData(response);
      setLoader(false);
      console.log(response);
    });
    setSearchTerm("");
  };

  useEffect(() => {
    fetchDetails(query).then((response) => {
      setData(response);
      setLoader(false);
      console.log(response);
    });
  }, []);

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Meals</strong>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="search by ingredients"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button
            onClick={() => (searchRecipe(searchTerm), setLoader(true))}
            className="search-btn"
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="flexItem">
                <div className="img-wrapper">
                  <img src={item.strMealThumb} alt={item.strMeal} />
                </div>
                <p>{item.strMeal}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default RecipeLists;
