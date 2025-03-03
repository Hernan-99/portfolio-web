import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Buttons.module.css";

export const OutlineButton = ({ value }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`${styles.copyEmail} ${styles.shadow} ${
        theme === "dark" ? styles.copyEmailDark : styles.copyEmailLight
      }`}
    >
      {value}
    </button>
  );
};
