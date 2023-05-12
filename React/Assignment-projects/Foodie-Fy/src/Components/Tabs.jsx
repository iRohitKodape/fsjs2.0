import { useState, useEffect } from "react";

import {
  GiFruitBowl,
  GiAnglerFish,
  GiCheckMark,
  GiThreeLeaves,
} from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { fetchByCategory, fetchById } from "../Api";

function Tabs() {
  const [active, setActive] = useState("Veg");
  const [tabData, setTabData] = useState("");
  const [tabLabel, setTabLabel] = useState([
    {
      name: "Veg",
      icons: <GiThreeLeaves />,
      id: "52864",
    },
    {
      name: "SeaFood",
      icons: <GiAnglerFish />,
      id: "52959",
    },
    {
      name: "Dessert",
      icons: <GiFruitBowl />,
      id: "53049",
    },
    {
      name: "Breakfast",
      icons: <MdFreeBreakfast />,
      id: "52957",
    },
  ]);

  const handleCLick = (name, id) => {
    setActive(name);
    fetchByCategory(name).then((res) => {
      setTabData(res);
    });
  };

  useEffect(() => {
    fetchById(tabLabel[0].id).then((res) => {
      setTabData(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((item, index) => {
          return (
            <div
              className={`tablist ${active === item.name ? "active" : ""}`}
              key={index}
              onClick={() => handleCLick(item.name, item.id)}
            >
              {item.icons}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="recipe_banner">
        {tabData !== "" && (
          <>
            <div className="left-col">
              <span className="badge">{tabData.strArea}</span>
              <h1>{tabData.strMeal}</h1>
              <p>
                <strong>Recipe by:</strong>
                <small>Foodie-fy</small>
              </p>
              <h3>Ingredients</h3>
              <div className="ingredients">
                <ul>
                  <li>
                    <GiCheckMark size="18px" color="#6fcb9f" />
                    &nbsp;
                    <span>{tabData.strIngredient1}</span>
                  </li>
                  <li>
                    <GiCheckMark size="18px" color="#6fcb9f" />
                    &nbsp;
                    <span>{tabData.strIngredient2}</span>
                  </li>
                  <li>
                    <GiCheckMark size="18px" color="#6fcb9f" />
                    &nbsp;
                    <span>{tabData.strIngredient3}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-col">
              <div className="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80"
                  alt=""
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Tabs;
