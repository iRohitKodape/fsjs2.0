import axios from "axios";
// import img from "../assets/3519619_2396.jpg";
import { useEffect, useState } from "react";
const imgUrl = `https://pokeapi.co/api/v2/pokemon/`;

const CardItem = ({ p }) => {
  const [img, setImg] = useState();
  const [ability, setAbility] = useState();
  const [power, setPower] = useState();

  const fetchImages = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${p}`);
      const data = res.data.sprites;
      setImg(data.front_default);
      setAbility(res.data.abilities[0].ability.name);
    } catch (error) {
      console.log(error);
    }
  };

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
