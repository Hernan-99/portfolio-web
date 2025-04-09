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
        <button className={`${styles.btn}`}>
          Ver todos
          <ArrowUpRightIcon style={{ width: "16px" }} />
        </button>
      </div>

      <ListContent type={type} />
    </section>
  );
};

export default Showcase;
