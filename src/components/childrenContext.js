import React, { useContext } from "react";
import GlobalStyle from "../styles/global";
import Layout from "./Layout";
import {
  ThemeProvider as ThemeProviderContext,
  useTheme,
} from "../contexts/ThemeProvider";
import { ThemeProvider } from "styled-components";

function Styles() {
  const { currentTheme } = useTheme();
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default Styles;
