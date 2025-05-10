import "./ContactForm.css"; // Importa los estilos

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2 className="form-title">Contáctame</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" placeholder="Tu nombre" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="tucorreo@ejemplo.com" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
