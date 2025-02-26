import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const Credits = ({ copywrite, linkedin, github }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`copy dark-mode ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <p style={{ marginBottom: "20px" }}>{copywrite}</p>
      <nav>
        <ul
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <li>
            <a style={{ color: "#fff" }} href={linkedin}>
              Linkedin
            </a>
          </li>
          <li>
            <a style={{ color: "#fff" }} href={github}>
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
