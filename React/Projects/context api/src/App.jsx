import Context from "./Context/Context";
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
          <h3>Agent Info:{context.data.agentId}</h3>
          <p>Mission Name :{context.data.mName}</p>
          <p>
            Mission Name :{context.data.accept ? "ACCEPTED" : "NOT ACCEPTED"}
          </p>

          <button onClick={context.isAccepted}>ACCEPT the mission</button>
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
