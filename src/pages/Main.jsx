export const Main = ({ theme }) => {
  return (
    <main
      className={`dark-mode ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      Main
    </main>
  );
};
