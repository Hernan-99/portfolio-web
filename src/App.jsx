import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Agrega BrowserRouter y Routesimport "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import "./App.css";
import { PageNotFound } from "./pages/PageNotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
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
