import { Main } from "./Main";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import styles from "./Pages.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
export const Page = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.wrapper} ${theme}`}>
      <Header />
      <AnimatedContent
        distance={250}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <div
          className={`${styles.container} ${
            theme === "dark" ? styles.container : styles.containerLightMode
          }`}
        >
          <Main />
          <Footer theme={theme} />
        </div>
      </AnimatedContent>
    </div>
  );
};
