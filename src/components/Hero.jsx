import ImgProfile from "../assets/img/ImgProfile.webp";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { ProfileImg } from "./ProfileImg";
export const Hero = () => {
  return (
    <>
      <Badge title="Desarrollador Frontend Jr" />
      <ProfileImg img={ImgProfile} alt="imagen de perfil" />
      <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
        Hernán Sánchez
      </h1>
      <p style={{ textAlign: "center", marginBottom: "12px" }}>
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
        <Button
          bgColor="#383838"
          color="#f0f0f0"
          border="none"
          value="Contáctame"
        />
        <Button
          bgColor="transparent"
          color="#f0f0f0"
          border="2px solid rgba(192,192,192, 0.35)"
          value="Copy email"
        />
      </div>
    </>
  );
};
