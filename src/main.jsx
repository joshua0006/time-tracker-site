import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, useTheme } from "./ThemeContext";

const Root = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : ""}>
      <App />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </StrictMode>
);
