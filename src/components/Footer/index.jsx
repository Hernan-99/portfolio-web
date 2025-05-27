import { SocialMedia } from "../Icons/SocialMedia";
import { Credits } from "./Credits";

const Footer = () => {
  return (
    <footer
      style={{
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <SocialMedia />
      <Credits
        copywrite="© 2024 Hernan Sanchez – Fullstack Developer"
        linkedin="https://www.linkedin.com/in/sanchez-hernan-gabriel/"
        github="https://github.com/Hernan-99"
      />
    </footer>
  );
};

export default Footer;
