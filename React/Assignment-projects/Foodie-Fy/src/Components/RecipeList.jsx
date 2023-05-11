import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchDetails } from "../Api";

function RecipeLists() {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("chicken_breast");
  const [data, setData] = useState("");

  useEffect(() => {
    fetchDetails(query).then((response) => {
      setData(response);
      console.log(response);
    });
  }, []);

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input type="text" placeholder="Search" />
          <button>
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
