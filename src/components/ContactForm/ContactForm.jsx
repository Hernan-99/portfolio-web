import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./ContactForm.css"; // Importa los estilos
import styles from "./mode.module.css";

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <form style={{ marginBottom: "25px" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginBottom: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <input
          className={`${
            theme === "dark" ? styles.contactmeDark : styles.contactmeLight
          }`}
          style={{ width: "50%" }}
          type="text"
          placeholder="Nombre"
        />
        <input
          className={`${
            theme === "dark" ? styles.contactmeDark : styles.contactmeLight
          }`}
          style={{ width: "50%" }}
          type="email"
          placeholder="Email"
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginBottom: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <input
          className={`${
            theme === "dark" ? styles.contactmeDark : styles.contactmeLight
          }`}
          style={{ width: "50%" }}
          type="text"
          placeholder="Celular"
        />
        <select
          className={`${
            theme === "dark" ? styles.contactmeDark : styles.contactmeLight
          }`}
          style={{ width: "50%" }}
          name=""
          id=""
        >
          <option value="---">Seleccione una opcion</option>
          <option value="desarrollo de sofware">Desarrollo de software</option>
          <option value="asesoramiento">Asesoramiento</option>
          <option value="diseño web">Diseño web</option>
        </select>
      </div>
      <div style={{ width: "100%", marginBottom: "0.5rem" }}>
        <textarea
          className={`${
            theme === "dark" ? styles.contactmeDark : styles.contactmeLight
          }`}
          style={{ width: "100%" }}
          name=""
          id=""
          placeholder="Mensaje adicional"
        ></textarea>
      </div>
      <div style={{ width: "100%" }}>
        <button
          className={`${
            theme === "dark" ? styles.contactmeDark : styles.btnLight
          }`}
          style={{ width: "100%", padding: "1.2rem" }}
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
