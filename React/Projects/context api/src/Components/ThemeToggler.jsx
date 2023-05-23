import { useContext } from "react";
import ThemeContext from "../Context/Context";

const ThemeToggler = () => {
  const [mode, setMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      <span>{mode === "light" ? "Dark mode" : "light Mode"}</span>
    </div>
  );
};

export default ThemeToggler;
