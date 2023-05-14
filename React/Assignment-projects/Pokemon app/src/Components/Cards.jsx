import CardItem from "./CardItem";

const Cards = () => {
  return (
    <section className="cards">
      <h1>Pokemon</h1>
      <div className="underline"></div>
      <div className="card-items">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </section>
  );
};
export default Cards;
