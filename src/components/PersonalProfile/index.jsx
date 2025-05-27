import Badge from "../Badge";
import { Experience } from "./Experience";
import { PersonalProfile } from "./PersonalProfile";

const About = () => {
  return (
    <section>
      <div style={{ paddingLeft: "18px", paddingRight: "18px" }}>
        <Badge title="Sobre mi" />
      </div>
      <PersonalProfile />
      <Experience />
    </section>
  );
};

export default About;
