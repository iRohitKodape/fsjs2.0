import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Pagination from "./Components/Pagination";
import SingleCard from "./Components/SingleCard";

const urlApi = "https://pokeapi.co/api/v2/pokemon";
const imgUrl = `https://pokeapi.co/api/v2/pokemon/`;

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(urlApi);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // fetch images state values

  const [img, setImg] = useState();
  const [ability, setAbility] = useState();
  const [power, setPower] = useState();

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

  useEffect(() => {}, []);

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
  // fetchImages
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

  return (
    <main className="main-container">
      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setIsSearching={setIsSearching}
        isSearching={isSearching}
      />
      {!isSearching ? (
        <Cards
          pokemon={pokemon}
          img={img}
          ability={ability}
          power={power}
          fetchImages={fetchImages}
        />
      ) : (
        <SingleCard
          pokemon={pokemon}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}
      {!isSearching ? (
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      ) : (
        <SingleCard />
      )}
    </main>
  );
}

export default App;
