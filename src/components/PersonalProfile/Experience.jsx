import experience from "../../assets/data/experience.json";
import styles from "./Personalprofile.module.css";
export const Experience = () => {
  return (
    <section style={{ color: "#fff", marginBottom: "2rem" }}>
      <h3
        style={{
          fontSize: "1.8rem",
          color: "#f0f0f0",
          marginBottom: "20px",
        }}
      >
        Experiencia
      </h3>

      <article className={styles.containerExp}>
        {experience.map((exp, i) => (
          <div key={i} className={styles.badgeExp}>
            <h4
              style={{
                marginBottom: "10px",
                color: "#f0f0f0",
              }}
            >
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
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#252525",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: "0.75rem", // Tamaño más pequeño
                    opacity: "0.9",
                  }}
                >
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
