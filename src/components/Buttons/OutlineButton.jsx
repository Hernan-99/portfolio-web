import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Buttons.module.css";

export const OutlineButton = ({ value, onClick, icon: Icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={`${styles.copyEmail} ${styles.shadow} ${
        theme === "dark" ? styles.copyEmailDark : styles.copyEmailLight
      }`}
    >
      {Icon && <Icon className={styles.icon} />}
      {value}
    </button>
  );
};
