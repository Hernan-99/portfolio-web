import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Showcase.module.css";
import TitleSection from "../TitleSection";
import { ListContent } from "./ListContent";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

// Showcase recibe type y se lo pasa a ListContent
const Showcase = ({ title, type }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`showcase ${styles.showcaseCustom} ${
        theme === "dark" ? styles.showcaseCustom : styles.showcaseCustomLight
      }`}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleSection title={title} />
        <button
          style={{
            width: "100px",
            backgroundColor: "#383838",
            color: "#fff",
            border: "none",
            padding: "8px 10px",
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Ver todos
          <ArrowUpRightIcon style={{ width: "16px" }} />
        </button>
      </div>

      <ListContent type={type} />
    </section>
  );
};

export default Showcase;
