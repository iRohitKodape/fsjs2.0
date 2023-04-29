import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUser, faUserPen } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ t, deleteItem }) => {
  return (
    <div className="todolist">
      <div className="upper">
        <input type="checkbox" value={t.completed} />
        <p>{t.text}</p>
      </div>
      <div className="lower">
        <FontAwesomeIcon icon={faUserPen} size="l"/>
        <FontAwesomeIcon
          icon={faTrash}
          size="l"
          onClick={() => deleteItem(t.id)}
        />
      </div>
    </div>
  );
};

export default TodoList;
