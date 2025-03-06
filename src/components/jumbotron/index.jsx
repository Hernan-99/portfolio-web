import { useContext, useState } from "react";
import { DefaultButton } from "../Buttons/DefaultButton";
import { OutlineButton } from "../Buttons/OutlineButton";
import styles from "./Jumbotron.module.css";
import ThemeContext from "../../context/ThemeContext";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

const Jumbotron = () => {
  const { theme } = useContext(ThemeContext);
  const [copy, setCopy] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hernan24744@gmail.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 800);
  };

  return (
    <section className={`${styles.jumbotron}`}>
      <h3
        className={`${styles.jumbotronTitle} ${
          theme === "dark" ? styles.jumbotronTitle : styles.jumbotronTitleDark
        }`}
      >
        Abierto a recibir nuevas propuestas
      </h3>
      <p
        className={`${styles.jumbotronText} ${
          theme === "dark" ? styles.jumbotronText : styles.jumbotronTextLight
        }`}
      >
        Me gusta crear una experiencia de usuario y un diseño visualmente
        atractivo.
      </p>
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <DefaultButton />

        <OutlineButton
          value="Descargar cv"
          onClick={handleCopyEmail}
          icon={ArrowDownTrayIcon}
        />
        {copy && (
          <p
            style={{
              color: "#fff",
              position: "fixed",
              top: "300px",
              borderRadius: "6px",
              fontWeight: "600",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "80%",
              padding: "20px 8px",
              textAlign: "center",
              opacity: copy ? 1 : 0, // Controlamos la visibilidad con opacity
              transition: "opacity 300ms ease-in-out",
            }}
          >
            Descargado
          </p>
        )}
      </div>
    </section>
  );
};

export default Jumbotron;
