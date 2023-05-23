import { useState } from "react";
import Context from "./Context/Context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mName: "Go to kill john",
    agentId: "007",
    accept: false,
  });

  return (
    <Context.Provider
      value={{
        data: mission,
        isAccepted: () => {
          setMission({
            ...mission,
            accept: true,
          });
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
