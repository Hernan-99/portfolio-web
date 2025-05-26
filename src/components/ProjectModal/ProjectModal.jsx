import styles from "./ProjectModal.module.css";

const ProjectModal = ({ category, onClose }) => {
  if (!category) return null;
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
          <h2>{category.title}</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            X
          </button>
        </div>
        <article>
          {category.projects.map((el) => (
            <div className={styles.card} key={el.id}>
              <div className={styles.cardHeader}>
                <img
                  src={el.image || "https://via.placeholder.com/500x200"}
                  alt={el.name}
                />
              </div>
              <div className={styles.cardBody}>
                <p>{el.description}</p>
                {el.technolgies?.length > 0 && (
                  <>
                    <strong>Tecnologías:</strong>
                    <ul className={styles.techList}>
                      {el.technolgies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </>
                )}
                {el.url && (
                  <a
                    className={styles.demoLink}
                    href={el.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

export default ProjectModal;
