import { useState } from "react";
import TodoList from "./Components/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTodos = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodos));
    setTodo("");
  }

  const deleteItem = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  console.log(todos);
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faCirclePlus} size="xl"/>
          </button>
        </form>
        {todos.map((t) => {
          return <TodoList t={t} key={t.id} deleteItem={deleteItem} />;
        })}
      </div>
    </>
  );
}

export default App;
