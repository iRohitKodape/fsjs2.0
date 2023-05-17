import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleCard = ({ name, img, abilities }) => {
  console.log(name, img, abilities);
  return (
    <>
      <section className="single-card">
        <div className="card-data">
          <img src={img} alt={name} width='300px' />
          <div className="info">
            <span>{name}</span>
            <span>{abilities}</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingleCard;
