import { useContext, useState } from "react";
import ImgProfile from "../../assets/img/ImgProfile.webp";
import Badge from "../Badge";
import { OutlineButton } from "../Buttons/OutlineButton";
import { DefaultButton } from "../Buttons/DefaultButton";
import { ProfileImg } from "./ProfileImg";
import ThemeContext from "../../context/ThemeContext";
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const [copy, setCopy] = useState(false);
  const handleCopyEmail = () => {
    // navigator.clipboard.writeText("hernan24744@gmail.com"); // la api se bloquea en http por eso no puedo probarlo en el celular
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 800);
  };

  return (
    <section className={`hero ${theme === "dark" ? "hero" : "heroLightMode"}`}>
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
        <DefaultButton />
        <OutlineButton
          value="Copy email"
          onClick={handleCopyEmail}
          icon={DocumentDuplicateIcon}
        />
        {copy && (
          <p
            style={{
              color: "#fff",
              position: "absolute",
              top: "250px",
              borderRadius: "6px",
              fontWeight: "600",
              backgroundColor: "rgba(255,255,255,0.5)",
              width: "80%",
              padding: "20px 8px",
              textAlign: "center",
            }}
          >
            Copiado
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
