import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faUser,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({
  t,
  deleteItem,
  completedTask,
  todoEditing,
  editingText,
  setTodoEditing,
  setEditingText,
  editTodo,
}) => {
  return (
    <div className="todolist">
      <div className="upper">
        <input
          type="checkbox"
          onChange={() => completedTask(t.id)}
          checked={t.completed}
        />
        {todoEditing === t.id ? (
          <>
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
              value={editingText}
            />
          </>
        ) : (
          <p>{t.text}</p>
        )}
      </div>
      <div className="lower">
        {todoEditing == t.id ? (
          <FontAwesomeIcon
            icon={faEdit}
            size="l"
            onClick={() => editTodo(t.id)}
            title="update"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUserPen}
            size="l"
            onClick={() => setTodoEditing(t.id)}
            title="edit"
          />
        )}
        <FontAwesomeIcon
          icon={faTrash}
          size="l"
          onClick={() => deleteItem(t.id)}
          title="delete"
        />
      </div>
    </div>
  );
};

export default TodoList;
