import ContactForm from "../components/ContactForm/ContactForm";
import Layout from "../components/Layout/Layout";
import Badge from "../components/Badge";

export const Contactme = () => {
  return (
    <Layout>
      <Badge title="Contactame" />
      <div style={{ marginBottom: "25px" }}>
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
