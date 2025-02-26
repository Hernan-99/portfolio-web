import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Hero } from "../components/Hero";

export const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`dark-mode ${theme === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <Hero />
    </main>
  );
};
