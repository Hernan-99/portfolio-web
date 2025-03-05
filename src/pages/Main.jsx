import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import Showcase from "../components/Showcase";
export const Main = () => {
  return (
    <main>
      <Hero />

      {/* 
      Le pasamos type a Showcase porque es el componente que decide qué tipo de datos vamos a mostrar.
      le decimos a cada Showcase qué tipo de contenido debe renderizar.
      */}
      <Showcase title="Proyectos" type="projects" />
      <Showcase title="Diseño UX/UI" type="designs" />
      <Showcase title="Blog" type="blogs" />
      <Jumbotron />
    </main>
  );
};
