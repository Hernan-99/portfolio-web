import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Title.module.css";

const TitleSection = ({ title,  }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "#616161",
          borderRadius: "100%",
          marginRight: "10px",
        }}
      ></div>
      <h3
        className={`${styles.title} ${
          theme === "dark" ? styles.titleDarkMode : styles.titleLightMode
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default TitleSection;
