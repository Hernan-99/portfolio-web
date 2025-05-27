import Badge from "../Badge";
import { Experience } from "./Experience";
import { PersonalProfile } from "./PersonalProfile";

const About = () => {
  return (
    <>
      <Badge title="Sobre mi" />
      <PersonalProfile />
      <Experience />
    </>
  );
};

export default About;
