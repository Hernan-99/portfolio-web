import { SocialMedia } from "../Icons/SocialMedia";
import { Credits } from "./Credits";

const Footer = () => {
  return (
    <footer>
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
