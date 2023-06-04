import CardItem from "./CardItem";

const Cards = ({ pokemon, fetchImages }) => {
  console.log(pokemon);
  return (
    <section className="cards">
      <h1>Pokemon</h1>
      <div className="underline"></div>
      <div className="card-items">
        {pokemon.map((p) => {
          return <CardItem key={p} p={p} fetchImages={fetchImages} />;
        })}
      </div>
    </section>
  );
};
export default Cards;
