import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ setTodos, todos, text, id, completed }) => {
  const deleteTodo = () => {
    const newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
  };

  const completedTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text} </li>
      <button className="complete-btn" title="check" onClick={completedTodo}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="trash-btn" title="delete" onClick={deleteTodo}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button className="edit-btn" title="edit">
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </div>
  );
};
export default Todo;
