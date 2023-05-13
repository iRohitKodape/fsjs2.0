import Menu from "./Components/Menu";
import Title from "./Components/Title";
import menu from "./data";
import Categories from "./Components/Categories";
import { useState } from "react";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all',...tempSet];
// console.log(tempItems);

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories
          categories={categories}
          filterCategories={filterCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
