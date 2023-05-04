import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <form>
      <input type="text" className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type="submit">
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
