import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Buttons.module.css";

export const DefaultButton = ({ onClick, spacing }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      style={{ marginRight: spacing }}
      onClick={onClick}
      className={`${styles.contactme} ${
        theme === "dark" ? styles.contactmeDark : styles.contactmeLight
      }`}
    >
      Contactame
    </button>
  );
};
