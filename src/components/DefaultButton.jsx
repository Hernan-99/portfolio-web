import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const DefaultButton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`contactme ${
        theme === "dark" ? "contactme-dark " : "contactme-light"
      }`}
    >
      Contactame
    </button>
  );
};
