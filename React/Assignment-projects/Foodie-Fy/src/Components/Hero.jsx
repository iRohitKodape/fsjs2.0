import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <form>
        <section className="upper-form">
          <input type="text" placeholder="Search recipes here" />
          <button type="submit">
            <FaSearch size="20px" color="white" />
          </button>
        </section>
        <section className="hero-txt">
          <p>Which are your Favourites</p>
          <p>Experience Deliciously with us </p>
        </section>
      </form>
    </section>
  );
};
export default Hero;
