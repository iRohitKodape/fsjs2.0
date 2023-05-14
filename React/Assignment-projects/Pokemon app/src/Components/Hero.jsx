import { HiOutlineSearch } from "react-icons/hi";

const Hero = () => {
  return (
    <article className="hero">
      <section className="search">
        <input type="text" placeholder="Search Pokemon" />
        <button>
          <HiOutlineSearch color="white" />
        </button>
      </section>
      <p>Search Among Your Favourites</p>
    </article>
  );
};
export default Hero;
