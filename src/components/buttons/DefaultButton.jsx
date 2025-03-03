import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Buttons.module.css";

export const DefaultButton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`${styles.contactme} ${
        theme === "dark" ? styles.contactmeDark : styles.contactmeLight
      }`}
    >
      Contactame
    </button>
  );
};
