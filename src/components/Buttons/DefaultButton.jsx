import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";

export const DefaultButton = ({ onClick, spacing }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link to="/contact-me">
      <button
        style={{ marginRight: spacing }}
        onClick={onClick}
        className={`${styles.contactme} ${
          theme === "dark" ? styles.contactmeDark : styles.contactmeLight
        }`}
      >
        Contactame
      </button>
    </Link>
  );
};
