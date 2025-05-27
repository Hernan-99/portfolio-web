import Badge from "../components/Badge";
import Layout from "../components/Layout/Layout";
import Showcase from "../components/Showcase/index";

export const Projects = () => {
  return (
    <Layout>
      <div
        style={{
          paddingLeft: "18px",
          paddingRight: "18px",
          marginBottom: "25px",
        }}
      >
        <Badge title="Mis proyectos" />
      </div>
      <div
        style={{
          paddingLeft: "18px",
          paddingRight: "18px",
          marginBottom: "25px",
        }}
      >
        <Showcase title="Desarrollo" type="projects" />
        <Showcase title="Diseño UX/UI" type="designs" />
        <Showcase title="Blog" type="blogs" />
      </div>
    </Layout>
  );
};
