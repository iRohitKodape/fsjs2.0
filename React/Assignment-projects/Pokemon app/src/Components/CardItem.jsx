import axios from "axios";
// import img from "../assets/3519619_2396.jpg";
import { useEffect, useState } from "react";

const CardItem = ({ p, img, ability, power, fetchImages }) => {
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="card">
      <img src={img} alt="" height="200px" />
      <span className="card-name">{p}</span>
      <div className="features">
        <span>Ability: {ability}</span>
      </div>
    </div>
  );
};
export default CardItem;
