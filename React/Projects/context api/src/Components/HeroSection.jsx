import { useContext } from "react";
import ThemeContext from "../Context/Context";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.color}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is a paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${currentTheme.border}`,
        }}
      >
        clickMe
      </button>
    </div>
  );
};
export default HeroSection;
