import Badge from "../components/Badge";
import Layout from "../components/Layout/Layout";
import About from "../components/PersonalProfile";

export const Aboutme = () => {
  return (
    <Layout>
      <Badge title="Sobre mi" />
      <About />
    </Layout>
  );
};
