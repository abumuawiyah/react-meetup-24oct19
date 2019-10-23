import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Box from "./Box";
import Flexbox from "./Flexbox";
import Button from "./Button";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Box
        as={"section"}
        p="10px"
        m="50px 50px"
        bgColor="papayawhip"
        h={"100px"}
      >
        I am Box that's rendered as Section
      </Box>

      <Card w={"100%"} h={"200px"} justifyContent="space-between">
        <Box
          as={"img"}
          w={"50px"}
          h={"50px"}
          src="https://avatars.io/twitter/aziziyazit"
        />
      </Card>

      <Flexbox
        w="100%"
        h="200px"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        bgColor="papayawhip"
      >
        I am content inside Flexbox
        <Button primary>I am styled button</Button>
      </Flexbox>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
