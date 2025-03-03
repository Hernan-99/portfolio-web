import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "./Main";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import styles from "./Pages.module.css";

export const Page = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.wrapper} ${theme}`}>
      <Header />
      <Main />
      <Footer theme={theme} />
    </div>
  );
};
