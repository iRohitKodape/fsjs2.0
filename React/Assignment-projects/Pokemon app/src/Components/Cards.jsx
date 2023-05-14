import CardItem from "./CardItem";

const Cards = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <section className="cards">
      <h1>Pokemon</h1>
      <div className="underline"></div>
      <div className="card-items">
        {pokemon.map((p) => {
          return <CardItem key={p} p={p} />;
        })}
      </div>
    </section>
  );
};
export default Cards;
