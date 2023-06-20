import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./providers/Theme";
import { useState } from "react";
import { RouterProvider } from "react-router-dom"
import router from "./router";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <RouterProvider router={router} />
  </ThemeProvider>
  )
}

export default App;
