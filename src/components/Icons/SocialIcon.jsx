import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
export const SocialIcon = ({ icon }) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <li>
      <a
        href=""
        className={`text-dark ${theme === "dark" ? "text-dark" : "text-light"}`}
        style={{ fontSize: "1.3rem" }}
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
};
