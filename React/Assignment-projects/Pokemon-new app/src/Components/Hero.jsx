import { Button } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";

const Hero = ({ setSearchTerm, searchTerm, fetchPokemonData }) => {
  const handleClick = (searchTerm) => {
    fetchPokemonData(searchTerm);
    setSearchTerm("");
  };
  return (
    <>
      <article className="hero">
        <input
          type="text"
          placeholder="Search for pokemon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FcSearch
          style={{ position: "relative", top: "200px", left: "155px" }}
          onClick={() => handleClick(searchTerm)}
          size="30px"
        />
        <h2>Search your favourties</h2>
        <Button variant="secondary">Secondary</Button>
      </article>
    </>
  );
};
export default Hero;
