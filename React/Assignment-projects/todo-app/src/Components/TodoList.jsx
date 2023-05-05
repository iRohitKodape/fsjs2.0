import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          console.log(filteredTodos);
          return (
            <Todo key={todo.id} {...todo} setTodos={setTodos} todos={todos} />
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
