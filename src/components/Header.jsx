import { useContext } from "react";
import { Navbar } from "./Navbar";
import ThemeContext from "../context/ThemeContext";

export const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <header
      className={`dark-mode ${theme === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <Navbar theme={theme} handleTheme={handleTheme} />
    </header>
  );
};
