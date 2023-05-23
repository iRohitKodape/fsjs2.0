import { useState } from "react";
import ThemeContext from "./Context/Context";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="">
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
