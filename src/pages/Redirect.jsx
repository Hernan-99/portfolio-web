import { Link } from "react-router-dom";

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
        <a
          href="https://tuporfolioanterior.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#a100b8",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
        >
          Ir a mi portfolio anterior
        </a>
        <Link
          to="/"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#444",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#666")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#444")}
        >
          Volver al Home
        </Link>
      </div>
    </div>
  );
};
