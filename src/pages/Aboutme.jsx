import Badge from "../components/Badge";
import Layout from "../components/Layout/Layout";

export const Aboutme = () => {
  return (
    <Layout>
      <Badge title="Sobre mi" />
      <section>
        <h1 style={{ fontSize: "2.5rem", color: "#f0f0f0" }}>Hernan Sanchez</h1>
        <p style={{ fontSize: "1.3rem", lineHeight:"1.5", color: "#f0f0f0" }}>
          Apasionado por la tecnología y el desarrollo de software. Con
          experiencia en desarrollo fullstack, maquetación web y soporte
          técnico. Destaco de mi la proactividad, el compañerismo y el
          entusiasmo por el aprendizaje continuo. Actualmente busco seguir
          desarrollando mis habilidades y aportar mis conocimientos dentro de un
          equipo dinámico, enfrentando nuevos desafíos con un enfoque proactivo
          y orientado a resultados.
        </p>
      </section>
    </Layout>
  );
};
