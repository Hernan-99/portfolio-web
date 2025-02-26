import { Navbar } from "./Navbar";

export const Header = ({ theme, handleTheme }) => {
  return (
    <header
      className={`dark-mode ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navbar theme={theme} handleTheme={handleTheme} />
    </header>
  );
};
