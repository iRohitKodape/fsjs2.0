import List from "./Components/List";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length}birthdays today</h3>
        <List people={people} />
        <button
          className="btn btn-block"
          onClick={() => setPeople([])}
        >Clear Items</button>
      </section>
    </main>
  );
};
export default App;
