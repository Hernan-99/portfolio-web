import { useContext } from "react";

import Header from "../Header";
import ThemeContext from "../../context/ThemeContext";
import Footer from "../Footer";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import styles from "../../pages/Pages.module.css";

const Layout = ({ children }) => {
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
          <main>{children}</main>
          <Footer />
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Layout;
