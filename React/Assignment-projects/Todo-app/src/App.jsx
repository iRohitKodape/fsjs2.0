import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inpText) => {
    if (inpText !== "") {
      setListTodo([...listTodo, inpText]);
    }
  };

  const deleteListItem = (key) => {
    let newTodoList = [...listTodo];
    newTodoList.splice(key, 1);
    setListTodo([...newTodoList]);
  };
  return (
    <section className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, index) => {
          return (
            <TodoList
              key={index}
              index={index}
              item={listItem}
              deleteListItem={deleteListItem}
            />
          );
        })}
      </div>
    </section>
  );
};

export default App;
