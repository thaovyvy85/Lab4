import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Dashboard from "./Dashboard";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <Dashboard />
    </ThemeContext.Provider>
  );
}

export default App;
