import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import Showcase from "../components/Showcase";
export const Main = () => {
  return (
    <main>
      <Hero />
      <Showcase title="Proyectos" />
      <Showcase title="Blog" />
      <Jumbotron />
    </main>
  );
};
