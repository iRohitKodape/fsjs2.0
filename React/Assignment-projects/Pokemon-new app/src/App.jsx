import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Components/Hero";
import SingleCard from "./Components/SingleCard";
import "./App.css";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState();
  const [abilities, setAbilities] = useState();

  useEffect(() => {
    fetchPokemonData();
  }, []);

  async function fetchPokemonData(pokemonName = "pikachu") {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      console.log(response.data);
      setPokemon(response.data);
      setName(response.data.forms[0].name);
      setAbilities(response.data.abilities[0].ability.name);
      setImg(response.data.sprites.front_default);
      return response.data;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  }
  return (
    <>
      <section>
        <Hero
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          fetchPokemonData={fetchPokemonData}
        />
        <SingleCard name={name} img={img} abilities={abilities} />
      </section>
    </>
  );
}

export default App;
