import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "./Main";
import { useState } from "react";

const initialTheme = "dark";
export const Page = () => {
  const [theme, setTheme] = useState(initialTheme);
  const handleTheme = (e) => {
    e.preventDefault();
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme(initialTheme);
    }
  };
  return (
    <div className={`wrapper ${theme}`}>
      <Header theme={theme} handleTheme={handleTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};
