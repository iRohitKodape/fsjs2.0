import { HiOutlineSearch } from "react-icons/hi";
import { GrRefresh } from "react-icons/gr";
import axios from "axios";

const Hero = ({ searchTerm, setSearchTerm, setIsSearching, isSearching }) => {
  return (
    <article className="hero">
      <section className="search">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={"hello"}>
          {!isSearching ? (
            <HiOutlineSearch color="white" title="search" />
          ) : (
            <GrRefresh color="white" title="Refresh" />
          )}
        </button>
      </section>
      <p>Search Among Your Favourites</p>
    </article>
  );
};
export default Hero;
