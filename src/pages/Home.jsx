import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import Jumbotron from "../components/Jumbotron";

export const Home = () => {
  return (
    <Layout>
      <Hero />

      {/*
      Le pasamos type a Showcase porque es el componente que decide qué tipo de datos vamos a mostrar.
      le decimos a cada Showcase qué tipo de contenido debe renderizar.
      */}
      <Showcase title="Proyectos" type="projects" />
      <Showcase title="Diseño UX/UI" type="designs" />
      <Showcase title="Blog" type="blogs" />
      <Jumbotron />
    </Layout>
  );
};
