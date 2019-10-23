import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Box from "./Box";
import Flexbox from "./Flexbox";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Box as={"section"} p="10px" m="50px 50px">
        <Button>Test</Button>
      </Box>

      <Flexbox
        w="100%"
        h="200px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Button>Test</Button>
        <Button>Test</Button>
      </Flexbox>

      <Box
        p="10px"
        m="50px 50px"
        css={`
          border: 2px solid rebeccapurple;
        `}
      >
        <Button className="btn1">Test</Button>
      </Box>

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
