import React, { useState } from "react";

const TodoInput = ({ addList }) => {
  const [inputText, setInputText] = useState("");
  return (
    <section className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter todo"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button
        className="add-btn"
        onClick={() => {
          addList(inputText);
          setInputText("");
          console.log("clicked");
        }}
      >
        +
      </button>
    </section>
  );
};

export default TodoInput;
