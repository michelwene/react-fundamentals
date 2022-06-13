import React, { useContext } from "react";

// import GlobalStyle from "./styles/global";
// import Layout from "./components/Layout";
import { ThemeProvider as ThemeProviderContext } from "./contexts/ThemeProvider";
// import { ThemeProvider } from "styled-components";
import Styles from "./components/styles";

function App() {
  return (
    <ThemeProviderContext>
      <Styles />
    </ThemeProviderContext>
  );
}

export default App;
