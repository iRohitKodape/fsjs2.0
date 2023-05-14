import img from "../assets/3519619_2396.jpg";

const CardItem = ({ p }) => {
  return (
    <div className="card">
      <img src={img} alt="" height="200px" />
      <span className="card-name">{p}</span>
      <div className="features">
        <span>Ability</span>
        <span>power</span>
      </div>
    </div>
  );
};
export default CardItem;
