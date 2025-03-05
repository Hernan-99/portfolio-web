import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Buttons.module.css";

export const DefaultButton = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={onClick}
      className={`${styles.contactme} ${
        theme === "dark" ? styles.contactmeDark : styles.contactmeLight
      }`}
    >
      Contactame
    </button>
  );
};
