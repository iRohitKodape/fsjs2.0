import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React from "react";
const SingleQuestion = ({ id, title, info, toggleQuestion, activeId }) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
