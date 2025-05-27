import ContactForm from "../components/ContactForm/ContactForm";
import Layout from "../components/Layout/Layout";
import Badge from "../components/Badge";

export const Contactme = () => {
  return (
    <Layout>
      <div style={{ paddingLeft: "18px", paddingRight: "18px" }}>
        <Badge title="Contactame" />
      </div>
      <div
        style={{
          marginBottom: "25px",
          paddingLeft: "18px",
          paddingRight: "18px",
        }}
      >
        <h1 style={{ color: "#fff", marginBottom: "20px", fontSize: "2.5rem" }}>
          Realiza tu consulta
        </h1>
        <p style={{ color: "#fff", fontSize: "1.3rem" }}>
          ¿Tenes una idea y necesitas ayuda con el desarrollo y diseño?
        </p>
      </div>
      <ContactForm />
    </Layout>
  );
};
