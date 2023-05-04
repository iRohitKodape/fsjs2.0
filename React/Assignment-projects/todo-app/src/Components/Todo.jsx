import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ setTodos, todos, text, id }) => {
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="todo">
      <li className="todo-item">{text} </li>
      <button className="complete-btn" title="check">
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button
        className="trash-btn"
        title="delete"
        onClick={() => deleteTodo(id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button className="edit-btn" title="edit">
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </div>
  );
};
export default Todo;
