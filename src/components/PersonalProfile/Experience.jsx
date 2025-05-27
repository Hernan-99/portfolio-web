import { useContext } from "react";
import experience from "../../assets/data/experience.json";
import styles from "./Personalprofile.module.css";
import ThemeContext from "../../context/ThemeContext";
export const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`${styles.exp} ${
        theme === "light" ? styles.lightMode : styles.darkMode
      }`}
    >
      <h3 className={styles.titleExp}>Experiencia</h3>

      <article className={styles.containerExp}>
        {experience.map((exp, i) => (
          <div key={i} className={styles.badgeExp}>
            <h4 className={styles.position}>
              {exp.position} |{" "}
              <span style={{ color: "#02aab0" }}>{exp.company}</span>
            </h4>
            <p
              style={{
                fontSize: "0.95rem",
                marginBottom: "12px",
                lineHeight: "1.5",
              }}
            >
              {exp.task}
            </p>
            <div className={styles.badgeStack}>
              {exp.stack.map((skill) => (
                <span key={skill} className={styles.skills}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
