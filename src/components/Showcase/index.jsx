import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Showcase.module.css";
import TitleSection from "../TitleSection";

const Showcase = ({ title }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`showcase ${styles.showcaseCustom} ${
        theme === "dark" ? styles.showcaseCustom : styles.showcaseCustomLight
      }`}
    >
      <TitleSection title={title} />
    </section>
  );
};

export default Showcase;
