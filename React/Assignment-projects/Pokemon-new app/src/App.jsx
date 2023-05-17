import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./Components/Hero";
import SingleCard from "./Components/SingleCard";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  return (
    <>
      <section>
        <Hero />
        <SingleCard />
      </section>
    </>
  );
}

export default App;
