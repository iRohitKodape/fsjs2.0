import { useState } from "react";
import PackageContext from "./Context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mName: "Go to kill john",
    agentId: 007,
    accept: "Not accepted",
  });

  return (
    <PackageContext.Provider
      value={{ data: mission, isAccepted: { ...mission, accept: "ACCEPTED" } }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};
