import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./providers/Theme";
import { RouterProvider } from "react-router-dom"
import router from "./router";
import { useSelector } from "react-redux";

function App() {
  const { dark } = useSelector((state)=>state.theme);

  return (<ThemeProvider theme={dark ? darkTheme : lightTheme}>
    <RouterProvider router={router} />
  </ThemeProvider>
  )
}

export default App;
