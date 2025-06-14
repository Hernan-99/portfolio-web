import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "./SocialIcon";

export const SocialMedia = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`footer dark-mode ${
          theme === "dark" ? "dark-mode" : "light-mode"
        }`}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "100%",
              backgroundColor: "rgb(97, 97, 97)",
              marginRight: "10px",
            }}
          ></div>
          <h3>Mis redes</h3>
        </div>
        <ul
          style={{
            display: "flex",
            width: "30%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SocialIcon
            icon={faLinkedin}
            url="https://www.linkedin.com/in/sanchez-hernan-gabriel/"
          />
          <SocialIcon icon={faGithub} url="https://github.com/Hernan-99" />
          <SocialIcon
            icon={faBehance}
            url="https://www.behance.net/hernan-sanchez"
          />
        </ul>
      </div>
    </>
  );
};
