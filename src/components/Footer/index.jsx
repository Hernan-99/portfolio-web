import { SocialMedia } from "../Icons/SocialMedia";
import { Credits } from "./Credits";
import styles from "../Footer/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
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
