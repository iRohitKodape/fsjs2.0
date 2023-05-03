import questions from "../data";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ Questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};

export default Questions;
