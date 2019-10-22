import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";

import Box from "./Box";
import Flexbox from "./Flexbox";

const Button = styled.button`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Box p="10px" m="50px 50px">
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
