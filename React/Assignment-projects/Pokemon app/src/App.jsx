import { useState } from "react";

import "./App.css";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";

function App() {
  return (
    <main className="main-container">
      <Hero />
      <Cards />
    </main>
  );
}

export default App;
