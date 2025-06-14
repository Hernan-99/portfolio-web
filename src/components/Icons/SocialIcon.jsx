import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Icons.module.css";
export const SocialIcon = ({ icon, url }) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className={`text-dark ${styles.icon} ${
          theme === "dark" ? "text-dark" : "text-light"
        }`}
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
};
