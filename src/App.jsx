import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Page } from "./pages/Page";

function App() {
  return (
    <>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
    </>
  );
}

export default App;
