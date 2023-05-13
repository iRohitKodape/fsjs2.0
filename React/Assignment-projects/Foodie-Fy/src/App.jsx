import Header from "./Components/Header";
import Tabs from "./Components/Tabs";
import RecipeList from "./Components/RecipeList";
import "./App.scss";
import { useState } from "react";

const App = () => {
  const [loader, setLoader] = useState(true);
  return (
    <div>
      <Header />
      <Tabs setLoader={setLoader} />
      <RecipeList setLoader={setLoader} />
      {loader && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};
export default App;
