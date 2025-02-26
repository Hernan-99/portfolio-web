import { createContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = "dark";
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    // Al estar dentro del nav, me genera que el button se comporte como si estuviera dentro de un formulario
    e.preventDefault();
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme(initialTheme);
    }
  };
  const data = {
    theme,
    handleTheme,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
