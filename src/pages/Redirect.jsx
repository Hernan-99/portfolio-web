import { Link } from "react-router-dom";
import styles from "./Pages.module.css";

export const Redirect = () => {
  return (
    <div
      style={{
        backgroundColor: "#161616",
        color: "#ffffff",
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        ¡Uups! Todavia estoy trabajando en esta vista.
      </h1>
      <p
        style={{ fontSize: "1.5rem", marginBottom: "2rem", maxWidth: "600px" }}
      >
        Pero no te preocupes, podés ver mi portfolio anterior para conocer mis
        proyectos.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link className={styles.redirect} to="/">
          Volver al Home
        </Link>
      </div>
    </div>
  );
};
