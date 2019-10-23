import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Colors from "./Colors";
const MyglobalStyles = createGlobalStyle`

`;

function MyThemeProvider({ children }) {
  return (
    <ThemeProvider
      theme={{
        palette: { ...Colors }
      }}
    >
      <React.Fragment>
        <MyglobalStyles />
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default MyThemeProvider;
