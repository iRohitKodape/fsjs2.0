import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Task1",
      status: false,
    },
    { id: 2, title: "Task2", status: false },
  ]);

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task

  const addTask = () => {
    if (newTask) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTodo([...todo, newEntry]);
      setNewTask("");
    }
  };
  // delete task
  const deleteTask = (id) => {};

  // mark the task
  const markDone = (id) => {};

  // cancel the update
  const cancelUpdate = (id) => {};

  // change task
  const changeTask = (e) => {};

  // update task
  const updateTask = () => {};

  return (
    <>
      <div className="container">
        <br />
        <br />
        <h2>To DO List App</h2>
        <br />
        <br />

        {/* update task */}
        <div className="row">
          <div className="col">
            <input type="text" className="form-control form-control-lg" />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success mr-20">update</button>
            <button className="btn btn-lg btn-warning ">Cancel</button>
          </div>
        </div>
        <br />
        {/* add task */}
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control form-control-lg"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success" onClick={addTask}>
              Add todo
            </button>
          </div>
        </div>
        <br />
        {/* Display todos */}

        {todo && todo.length ? "" : "no tasks..."}

        {/* iterate over task */}
        {todo &&
          todo.sort().map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span title="completed/not completed">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    <span title="Edit">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span title="Delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default App;
