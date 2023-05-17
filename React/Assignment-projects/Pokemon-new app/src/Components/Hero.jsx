import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <article className="hero">
        <input type="text" placeholder="Search for pokemon" />
        <h2>Search for your favourties</h2>
        <Button variant="secondary">Secondary</Button>
      </article>
    </>
  );
};
export default Hero;
