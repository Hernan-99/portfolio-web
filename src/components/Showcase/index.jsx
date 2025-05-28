import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Showcase.module.css";
import TitleSection from "../TitleSection";
import { ListContent } from "./ListContent";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import ProjectModal from "../ProjectModal/ProjectModal";
import projects from "../../assets/data/projects.json";

// Showcase recibe type y se lo pasa a ListContent
const ShowCase = ({ title, type }) => {
  const { theme } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const data = projects.find((section) => section[type])?.[type] || [];

  return (
    <section
      className={`showcase ${styles.showcaseCustom} ${
        theme === "dark" ? styles.showcaseCustom : styles.showcaseCustomLight
      }`}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleSection title={title} />
        <button className={styles.btn}>
          Ver todos <ArrowUpRightIcon style={{ width: "16px" }} />
        </button>
      </div>

      <ListContent type={type} data={data} onSelect={setSelectedProject} />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ShowCase;
