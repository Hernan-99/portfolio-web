import { useContext } from "react";
import img from "../../assets/img/img.jpg";
import styles from "./Personalprofile.module.css";
import ThemeContext from "../../context/ThemeContext";
export const PersonalProfile = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={styles.about}>
      <article
        className={`${styles.description} ${styles.textAbout} ${
          theme === "light" ? styles.lightText : styles.darkText
        }`}
      >
        <h1
          className={`${styles.titleAbout} ${
            theme === "light" ? styles.lightTitle : styles.darkTitle
          }`}
        >
          Hola, soy Hernán Sánchez
        </h1>
        <p>
          Desarrollador Fullstack con mayor enfoque en Frontend, actualmente
          cuento con 2 años de experiencia. Destaco de mi la proactividad, el
          entusiasmo y motivación por seguir aprendiendo nuevas tecnologías y
          metodologías.
        </p>
        <p>
          Ademas del desarrollo de software, una de mis mas grandes pasiones es
          el diseño UX/UI, ya que considero que es una habilidad indispensable
          para lograr crear interfaces visualmente atractivas, funcionales y
          accesibles a los distintos usuarios.
        </p>
        <p>
          Actualmente, resido en Buenos Aires, Argentina, y estoy en busca de
          nuevos desafíos que me permitan seguir creciendo tanto personal como
          profesionalmente para seguir desarrollando mis habilidades y aportar
          mis conocimientos dentro de un equipo dinámico, a traves de un enfoque
          proactivo y orientado a resultados.
        </p>
      </article>
      <figure
        className={`${styles.figure} ${
          theme === "light" ? styles.lightFig : styles.darkFig
        }`}
      >
        <img src={img} alt="Foto de perfil, Hernán Sánchez" />
      </figure>
    </section>
  );
};
