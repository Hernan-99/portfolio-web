import { useContext } from "react";
import { Navbar } from "./Navbar";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <header
      className={`dark-mode ${theme === "dark" ? "dark-mode" : "light-mode-header"}`}
    >
      <Navbar theme={theme} handleTheme={handleTheme} />
    </header>
  );
};

export default Header;
