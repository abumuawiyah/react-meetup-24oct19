import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import MyThemeProvider from "./themes/MyThemeProvider";
import Box from "./Box";
import Flexbox from "./Flexbox";
import Button from "./Button";

function App() {
  const btnStyles = `
    font-size: 14px;
    height: 42px;
  `

  return (
    <div className="App">
      <MyThemeProvider>
        <Box
          as={"section"}
          p="10px"
          m="50px 50px"
          bgColor="papayawhip"
          h={"100px"}
          css={`
            display: none;
          `}
        >
          I am Box that's rendered as Section
        </Box>

        <Flexbox
          w="100%"
          h="200px"
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
          bgColor="papayawhip"
        >
          I am content inside Flexbox
          <Flexbox>
            <Button secondary css={btnStyles}>I am styled button</Button>
            <Button primary>I am styled button</Button>
          </Flexbox>
        </Flexbox>
      </MyThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
