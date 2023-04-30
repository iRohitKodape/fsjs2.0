import { useState, useEffect } from "react";
import TodoList from "./Components/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editingText, setEditingText] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

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
    const newTodos = [...todos].filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  const completedTask = (id) => {
    const completed = [...todos].map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(completed);
  };

  const editTodo = (id) => {
    const updated = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.txt = editingText;
      }
      return todo;
    });
    setTodos(updated);
    setTodoEditing(null);
    setEditingText("");
  };

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
            <FontAwesomeIcon icon={faCirclePlus} size="xl" />
          </button>
        </form>
        {todos.map((t) => {
          return (
            <TodoList
              t={t}
              key={t.id}
              deleteItem={deleteItem}
              completedTask={completedTask}
              editingText={editingText}
              setEditingText={setEditingText}
              todoEditing={todoEditing}
              setTodoEditing={setTodoEditing}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
