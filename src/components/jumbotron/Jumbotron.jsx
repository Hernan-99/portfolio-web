import { useContext } from "react";
import { DefaultButton } from "../buttons/DefaultButton";
import { OutlineButton } from "../buttons/OutlineButton";
import styles from "./Jumbotron.module.css";
import ThemeContext from "../../context/ThemeContext";
export const Jumbotron = () => {
  const { theme } = useContext(ThemeContext);

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
          width: "90%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <DefaultButton />
        <OutlineButton value="Copy email" />
      </div>
    </section>
  );
};
