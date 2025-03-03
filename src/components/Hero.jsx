import { useContext } from "react";
import ImgProfile from "../assets/img/ImgProfile.webp";
import { Badge } from "./Badge";
import { OutlineButton } from "./OutlineButton";
import { ProfileImg } from "./ProfileImg";
import ThemeContext from "../context/ThemeContext";
export const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Badge title="Desarrollador Frontend Jr" />
      <ProfileImg img={ImgProfile} alt="imagen de perfil" />
      <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
        Hernán Sánchez
      </h1>
      <p
        className={`text-dark ${theme === "dark" ? "text-dark" : "text-light"}`}
        style={{ textAlign: "center", marginBottom: "12px", fontWeight: "500" }}
      >
        Apasionado por la tecnología, el desarrollo y el diseño UI. Actualmente
        cursando la Tec. en programación en la Universidad Nacional Guillermo
        Brown.
      </p>
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "90%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button
          className={`contactme ${
            theme === "dark" ? "contactme-dark " : "contactme-light"
          }`}
        >
          Contactame
        </button>
        <OutlineButton
          bgColor="transparent"
          color="#f0f0f0"
          border="2px solid rgba(192,192,192, 0.35)"
          value="Copy email"
        />
      </div>
    </>
  );
};
