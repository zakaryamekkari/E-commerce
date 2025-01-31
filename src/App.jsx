import { useEffect, useState } from "react";
import HeaderTop from "./Components/Header/HeaderTop";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline>
        <HeaderTop toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
