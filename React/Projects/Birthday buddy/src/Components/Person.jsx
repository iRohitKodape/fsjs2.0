import React from "react";

const Person = ({ person }) => {
  return (
    <article className="person">
      <img src={person.image} alt={person.name} className="img" />
      <h4>{person.name}</h4>
      <p>{person.age} years</p>
    </article>
  );
};

export default Person;
