export const Footer = ({ theme }) => {
  return (
    <footer
      className={`dark-mode ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      Footer
    </footer>
  );
};
