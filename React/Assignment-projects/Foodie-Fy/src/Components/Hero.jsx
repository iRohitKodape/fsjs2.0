import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <form action="">
        <input type="text" placeholder="Search recipes here" />
        <button type="submit">
          <FaSearch size="24px" />
        </button>
      </form>
    </section>
  );
};
export default Hero;
