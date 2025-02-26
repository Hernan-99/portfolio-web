import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`dark-mode ${theme === "dark" ? "dark-mode" : "light-mode"}`}
    >
      Main
    </main>
  );
};
