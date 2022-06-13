import React from "react";

import { ThemeProvider as ThemeProviderContext } from "./contexts/ThemeProvider";
import Styles from "./components/childrenContext";

function App() {
  return (
    <ThemeProviderContext>
      <Styles />
    </ThemeProviderContext>
  );
}

export default App;
