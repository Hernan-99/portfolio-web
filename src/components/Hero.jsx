import ImgProfile from "../assets/img/ImgProfile.webp";
import { Badge } from "./Badge";
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
        Apasionado por la tecnología, desarrollo y diseño UI. Con experiencia en
        maquetación y desarrollo Frontend, combino funcionalidad y diseño
        mediante distintas tecnologías, me enfoco en soluciones innovadoras,
        creativas y eficientes. Destaco de mi la perseverancia, el compañerismo
        y el entusiasmo por el aprendizaje continuo. Actualmente busco seguir
        desarrollando mis habilidades y aportar mis conocimientos dentro de un
        equipo dinámico, enfrentando nuevos desafíos a través de un enfoque
        proactivo y orientado a resultados.
      </p>
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "60%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button>Contáctame</button>
        <button>Copy email</button>
      </div>

    </>
  );
};
