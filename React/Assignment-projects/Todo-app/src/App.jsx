import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="bg-indigo-500 h-[400px] w-[400px] rounded-lg flex flex-col items-center content-center ">
        <h1 className="text-3xl text-center p-4 font-semibold">Todo-List</h1>
        <TodoForm />
      </section>
    </>
  );
}

export default App;
