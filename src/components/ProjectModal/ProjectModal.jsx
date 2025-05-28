import styles from "./ProjectModal.module.css";

const ProjectModal = ({ project, onClose }) => {
  const projectsToShow = project.projects || [project]; // Si es un proyecto individual (diseño), igual lo muestra

  const handleOverlayClick = (e) => {
    // Si clickeó directamente en el fondo (overlay), cerrar
    if (e.target.classList.contains(styles.overlay)) {
      onClose();
    }
  };
  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            color: "#fff",
          }}
        >
          <h2>{project.title || project.name}</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            X
          </button>
        </div>

        <div className={styles.projectListInModal}>
          {projectsToShow.map((proj, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <img src={proj.image} alt={proj.name} />
              </div>
              <div className={styles.cardBody}>
                <h4>{proj.name}</h4>
                <p>{proj.description}</p>
                <strong>Tecnologías:</strong>
                <ul className={styles.techList}>
                  {proj.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <a
                  className={styles.demoLink}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
