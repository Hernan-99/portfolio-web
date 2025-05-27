import { SocialMedia } from "../Icons/SocialMedia";
import { Credits } from "./Credits";

const Footer = () => {
  return (
    <footer>
      <SocialMedia />
      <Credits
        copywrite="© 2025 Hernan Sanchez – Fullstack Developer"
        linkedin="https://linkedin.com"
        github="https://github.com"
      />
    </footer>
  );
};

export default Footer;
