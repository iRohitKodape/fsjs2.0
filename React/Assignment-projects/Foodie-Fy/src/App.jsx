import Header from "./Components/Header";
import Tabs from "./Components/Tabs";
import RecipeList from "./Components/RecipeList";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <RecipeList />
      <Tabs />
    </div>
  );
};
export default App;
