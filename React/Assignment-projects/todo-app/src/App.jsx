import { useState } from "react";
import TodoList from "./Components/TodoList";

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

  console.log(todo);
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
          <button type="submit">Add todo</button>
        </form>
        <TodoList />
      </div>
    </>
  );
}

export default App;
