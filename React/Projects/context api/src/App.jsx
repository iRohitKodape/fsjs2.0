import Context from "./Context";
import Provider from "./Provider";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentVinod />;
};

const AgentVinod = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          <h3>Agent Info:</h3>
          <p>Mission Name :</p>
        </>
      )}
    </Context.Consumer>
  );
};

function App() {
  return (
    <>
      <div>
        <h1>hello react</h1>
        <Provider>
          <Agents />
        </Provider>
      </div>
    </>
  );
}

export default App;
