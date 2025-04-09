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
      }}
    >
      <TitleSection title={title} />
      <a className={`${styles.contact}`} href=""></a>
      
      <div className={`${styles.content}`}>
        <div className={`${styles.dot}`}></div>
        <a className={`${styles.badge}`} href="">
          Disponible para trabajar
        </a>
      </div>
    </section>
  );
};

export default Badge;
