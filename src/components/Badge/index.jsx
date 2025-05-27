import { Link } from "react-router-dom";
import TitleSection from "../TitleSection";
import styles from "./Badge.module.css";
const Badge = ({ title }) => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
        padding: "0 10px",
      }}
    >
      <TitleSection title={title} />
      <a className={`${styles.contact}`} href=""></a>

      <div className={`${styles.content}`}>
        <div className={`${styles.dot}`}></div>
        <Link to="/contact-me" className={`${styles.badge}`} href="">
          Disponible para trabajar
        </Link>
      </div>
    </section>
  );
};

export default Badge;
