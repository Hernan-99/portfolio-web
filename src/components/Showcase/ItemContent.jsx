import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Showcase.module.css";

export const ItemContent = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li style={{ marginTop: "8px" }}>
      <a
        className={`${styles.item} ${
          theme === "dark" ? styles.item : styles.itemLightMode
        }`}
        href=""
      >
        {data.title}
      </a>
    </li>
  );
};
