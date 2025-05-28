import Badge from "../components/Badge";
import Layout from "../components/Layout/Layout";
import Showcase from "../components/Showcase/index";
import styles from "./Pages.module.css";

export const Projects = () => {
  return (
    <Layout>
      <Badge title="Mis proyectos" />
      <div className={styles.projects}>
        <Showcase title="Desarrollo" type="develop" />
        <Showcase title="Diseño UX/UI" type="designs" />
      </div>
    </Layout>
  );
};
