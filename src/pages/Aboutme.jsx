import Badge from "../components/Badge";
import Layout from "../components/Layout/Layout";
import img from "../assets/img/img.jpg";
import styles from "./Pages.module.css";

export const Aboutme = () => {
  return (
    <Layout>
      <Badge title="Sobre mi" />

      <section className={styles.about}>
        <article className={styles.description}>
          <h1>Hola, soy Hernán Sánchez</h1>
          <p className={styles.textAbout}>
            Desarrollador Fullstack con mayor enfoque en Frontend, actualmente
            cuento con 2 años de experiencia. Destaco de mi la proactividad, el
            entusiasmo y motivación por seguir aprendiendo nuevas tecnologías y
            metodologías.
          </p>
          <p className={styles.textAbout}>
            Ademas del desarrollo de software, una de mis mas grandes pasiones
            es el diseño UX/UI, ya que considero que es una habilidad
            indispensable para lograr crear interfaces visualmente atractivas,
            funcionales y accesibles a los distintos usuarios.
          </p>
          <p className={styles.textAbout}>
            Actualmente, resido en Buenos Aires, Argentina, y estoy en busca de
            nuevos desafíos que me permitan seguir creciendo tanto personal como
            profesionalmente para seguir desarrollando mis habilidades y aportar
            mis conocimientos dentro de un equipo dinámico, a traves de un
            enfoque proactivo y orientado a resultados.
          </p>
        </article>
        <figure className={styles.figure}>
          <img src={img} alt="Foto de perfil, Hernán Sánchez" />
        </figure>
      </section>

      <section style={{ color: "#fff", marginBottom: "2rem" }}>
        <h3
          style={{
            fontSize: "1.8rem",
            color: "#f0f0f0",
            marginBottom: "20px",
          }}
        >
          Experiencia
        </h3>

        <article className={styles.containerExp}>
          {/* Badge 1 - Soporte técnico */}
          <div className={styles.badgeExp}>
            <h4
              style={{
                marginBottom: "8px",
                color: "#f0f0f0",
              }}
            >
              Soporte técnico |{" "}
              <span style={{ color: "#02aab0" }}>PCs Razers</span>
            </h4>
            <p
              style={{
                fontSize: "0.95rem",
                marginBottom: "12px",
                lineHeight: "1.5",
              }}
            >
              Di soporte técnico de forma remota y on site a distintos clientes,
              me encargaba de tareas como solucionar incidencias técnicas,
              soporte para software como antivirus, instalaciones, diagnóstico y
              demás.
            </p>
            <div className={styles.badgeStack}>
              {[
                "Hardware",
                "Software",
                "AnyDesk",
                "Trello",
                "Gestión de tickets",
                "Soporte on-site",
                "Soporte remoto",
                "Diagnóstico",
                "Instalación de SO",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#252525",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: "0.75rem", // Tamaño más pequeño
                    opacity: "0.9",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Badge 2 */}
          <div className={styles.badgeExp}>
            <h4
              style={{
                marginBottom: "10px",
                color: "#f0f0f0",
              }}
            >
              Desarrollador y Diseñador web |{" "}
              <span style={{ color: "#02aab0" }}>CTeam</span>
            </h4>
            <p
              style={{
                fontSize: "0.95rem",
                marginBottom: "12px",
                lineHeight: "1.5",
              }}
            >
              Diseño, desarrollo y mantenimiento de sitios web, optimizando
              rendimiento, hosting y SSL. Personalización de plantillas y
              templates. Diseño web - diseño multimedia.
            </p>

            <div className={styles.badgeStack}>
              {[
                "HTML5",
                "CSS3",
                "BootStrap",
                "JavaScript",
                "PHP",
                "phpMyAdmin",
                "WordPress",
                "Elementor",
                "Figma",
                "Photoshop",
                "Illustrator",
                "Metodologías ágiles (Kanban)",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#252525",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: "0.75rem", // Tamaño más pequeño
                    opacity: "0.9",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Badge 3 */}
          <div className={styles.badgeExp}>
            <h4
              style={{
                marginBottom: "10px",
                color: "#f0f0f0",
              }}
            >
              Desarrollador Frontend - Diseñador UX/UI |{" "}
              <span style={{ color: "#02aab0" }}>Weblabor MX</span>
            </h4>
            <p
              style={{
                fontSize: "0.95rem",
                marginBottom: "12px",
                lineHeight: "1.5",
              }}
            >
              Me desempeñe en el rol de desarrollador de software, algunas de
              mis tareas fueron crear interfaces con Livewire/Alpine.js, backend
              en Laravel/PHP, integración de APIs y mantenimiento. Experiencia
              en metodologías ágiles (Scrum/Kanban).
            </p>
            <div className={styles.badgeStack}>
              {[
                "HTML5",
                "CSS3",
                "TailwindCSS",
                "JavaScript",
                "Vue.js",
                "Alpine.js",
                "PHP",
                "Laravel",
                "Livewire",
                "Figma",
                "MySQL",
                "API RESTful",
                "MVC",
                "Pruebas cruzadas",
                "Postman - Insomnia",
                "Figma",
                "Metodologías ágiles (Kanban)",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#252525",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: "0.75rem", // Tamaño más pequeño
                    opacity: "0.9",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Badge 4*/}
          {/* <div
            style={{
              backgroundColor: "#373737",
              borderRadius: "12px",
              width: "49%",
              padding: "1.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4
              style={{
                marginBottom: "10px",
                color: "#f0f0f0",
              }}
            >
              Desarrollador Fullstack |{" "}
              <span style={{ color: "#02aab0" }}>In motion</span>
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                margin: "10px 0",
              }}
            >
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                HTML5
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                CSS3
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                TailwindCSS
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Java
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Spring Boot
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                React
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                React router
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Axios
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Vue
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Unlayer.js
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                MySQL
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                AWS - CodeCommit
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Postman - Insomnia
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Pruebas cruzadas
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                API RESTful
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                MVC
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Diseño UX/UI
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Figma
              </span>
              <span
                style={{
                  backgroundColor: "#252525",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Metodologias agiles (Scrum | Kanban)
              </span>
            </div>
          </div> */}

          {/* Badge 4*/}
          <div className={styles.badgeExp}>
            <h4
              style={{
                marginBottom: "10px",
                color: "#f0f0f0",
              }}
            >
              Desarrollador Fullstack |{" "}
              <span style={{ color: "#02aab0" }}>Fiverr</span>
            </h4>
            <p
              style={{
                fontSize: "0.95rem",
                marginBottom: "12px",
                lineHeight: "1.5",
              }}
            >
              Desarrollo frontend con HTML, CSS, JavaScript, React.js y Vue.js.
              Backend con Node.js, Express y Java con Spring Boot. Creación,
              integración y optimización de APIs RESTful. Uso de Tailwind,
              Bootstrap y metodologías ágiles (scrum | kanban).
            </p>
            <div className={styles.badgeStack}>
              {[
                "HTML5",
                "CSS3",
                "TailwindCSS",
                "JavaScript",
                "React.js",
                "React router",
                "Vue.js",
                "Nuxt.js",
                "Axios",
                "Node.js",
                "Express.js",
                "MySQL",
                "MVC",
                "API RESTful",
                "Pruebas cruzadas",
                "Postman - Insomnia",
                "Figma",
                "Metodologías ágiles (Scrum | Kanban)",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#252525",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: "0.75rem", // Tamaño más pequeño
                    opacity: "0.9",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};
