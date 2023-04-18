import React from "react";

const TodoList = ({ item, deleteListItem, index }) => {
  return (
    <>
      <li className="list-item">
        {item}
        <span className="icons">
          <i
            className="fa-solid fa-trash-can"
            onClick={() => {
              deleteListItem(index);
            }}
          ></i>
        </span>
      </li>
      ;
    </>
  );
};

export default TodoList;
