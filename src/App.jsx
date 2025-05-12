import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Agrega BrowserRouter y Routesimport "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Home } from "./pages/Home";
import { Aboutme } from "./pages/Aboutme";
import { Projects } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";
import { Contactme } from "./pages/Contactme";
import "./App.css";
import { PageNotFound } from "./pages/PageNotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about-me", element: <Aboutme /> },
  { path: "/projects", element: <Projects /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/contact-me", element: <Contactme /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
