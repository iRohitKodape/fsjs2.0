import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Pagination from "./Components/Pagination";

const urlApi = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(urlApi);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };
  if (loading) {
    return (
      <>
        <div className="lds-hourglass"></div>
      </>
    );
  }

  return (
    <main className="main-container">
      <Hero />
      <Cards pokemon={pokemon} />
      <Pagination gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage} />
    </main>
  );
}

export default App;
