import React, { useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <header>
        <h1>Todo's List</h1>
        {inputText}
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
};

export default App;
