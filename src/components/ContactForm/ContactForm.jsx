import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./ContactForm.css"; // Importa los estilos
import styles from "./mode.module.css";
import { useForm } from "../../hooks/useForm";

const initialForm = {
  nombre: "",
  email: "",
  celular: "",
  consulta: "",
  msj: "",
};
const validationsForm = (form) => {
  let errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.nombre.trim()) {
    errors.nombre = "El nombre es requerido";
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = "Introduzca un nombre valido";
  }

  if (!form.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Introduzca un email valido";
  }

  if (!form.celular.trim()) {
    errors.celular = "El celular es requerido";
  }

  if (!form.consulta.trim()) {
    errors.consulta = "Seleccione el tipo de consulta";
  }

  if (!form.msj.trim()) {
    errors.msj = "Por favor, deje un mensaje";
  }

  return errors;
};

let stylesLine = {
  color: "#dc3545",
  padding: "0.3rem 0.8rem",
};

let stylesLineSuccess = {
  color: "#3bdc35",
  textAlign: "center",
  padding: "0.3rem 0.8rem",
};

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "25px" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginBottom: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "100%" }}>
          <input
            className={`${
              theme === "dark" ? styles.contactmeDark : styles.contactmeLight
            }`}
            name="nombre"
            type="text"
            placeholder="Nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.nombre}
            required
          />
          {errors.nombre && <p style={stylesLine}>{errors.nombre}</p>}
        </div>
        <div style={{ width: "100%" }}>
          <input
            className={`${
              theme === "dark" ? styles.contactmeDark : styles.contactmeLight
            }`}
            type="email"
            name="email"
            placeholder="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p style={stylesLine}>{errors.email}</p>}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          marginBottom: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "100%" }}>
          <input
            className={`${
              theme === "dark" ? styles.contactmeDark : styles.contactmeLight
            }`}
            type="text"
            name="celular"
            placeholder="Celular"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.celular}
            required
          />
          {errors.celular && <p style={stylesLine}>{errors.celular}</p>}
        </div>

        <div style={{ width: "100%" }}>
          <select
            className={`${
              theme === "dark" ? styles.contactmeDark : styles.contactmeLight
            }`}
            name="consulta"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.consulta || ""}
            required
          >
            <option value="---">Seleccione una opcion</option>
            <option value="asesoramiento">Asesoramiento</option>
            <option value="desarrollo de sofware">
              Desarrollo de software
            </option>
            <option value="diseño web">Diseño web</option>
          </select>
          {errors.consulta && <p style={stylesLine}>{errors.consulta}</p>}
        </div>
      </div>
      <div style={{ width: "100%", marginBottom: "0.5rem" }}>
        <textarea
          className={`${
            theme === "dark" ? styles.contactmeDark : styles.contactmeLight
          }`}
          style={{ width: "100%" }}
          name="msj"
          placeholder="Mensaje adicional"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.msj}
          required
        ></textarea>
        {errors.msj && <p style={stylesLine}>{errors.msj}</p>}
      </div>
      <div style={{ width: "100%" }}>
        <button
          className={`btnSubmit ${
            theme === "dark" ? styles.contactmeDark : styles.btnLight
          }`}
          type="submit"
        >
          Enviar
        </button>
        {loading && <p style={stylesLineSuccess}>Formulario enviado</p>}
      </div>
    </form>
  );
};

export default ContactForm;
