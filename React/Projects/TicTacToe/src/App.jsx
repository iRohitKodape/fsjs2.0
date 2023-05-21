import React, { useState } from "react";

import Icon from "./Components/Icon";
import { Card, CardBody, Container, Col, Row, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const itemArray = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = React.useState(false);
  const [winMessage, setWinMessage] = React.useState("");

  const reloadGame = () => {
    setIsCross();
    setWinMessage("");
    itemArray.fill("Empty", 0, 9);
  };

  const checkIsWinner = () => {};
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
    } else {
      return toast("already filled", { type: "error" });
    }
  };

  return (
    <div className="grid">
      {itemArray.map((item, index) => {
        return (
          <Card key={item}>
            <CardBody className="box">
              <Icon name={item} />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
