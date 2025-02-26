import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`dark-mode ${theme === "dark" ? "dark-mode" : "light-mode"}`}
    >
      Footer
    </footer>
  );
};
