import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleCard = ({ name, img, abilities }) => {
  console.log(name, img, abilities);
  return (
    <>
      <section className="single-card">
        <h1>Pokemon</h1>
        <div className="card-data">
          <img src={img} alt={name} width='300px' />
          <div className="info">
            <span>Name:{name}</span>
            <span>Ability:{abilities}</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingleCard;
