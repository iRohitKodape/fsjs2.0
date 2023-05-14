import { HiOutlineSearch } from "react-icons/hi";

const Hero = () => {
  return (
    <article className="hero">
      <section className="search">
        <input type="text" placeholder="Search Pokemon" />
        <button>
          <HiOutlineSearch />
        </button>
      </section>
    </article>
  );
};
export default Hero;
