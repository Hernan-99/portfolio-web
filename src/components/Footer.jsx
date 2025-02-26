import { SocialMedia } from "./SocialMedia";
import { Credits } from "./Credits";

export const Footer = () => {
  return (
    <footer>
      <SocialMedia />
      <Credits
        copywrite="© 2025 Hernan Sanchez – Frontend Developer"
        linkedin="https://linkedin.com"
        github="https://github.com"
      />
    </footer>
  );
};
