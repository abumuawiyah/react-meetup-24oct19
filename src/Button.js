import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rebeccapurple;
  color: white;
  border: 1px solid rebeccapurple;
  height: 42px;
  width: 100px;

  ${props => console.log(props.theme)}
`;

function Button({ children, ...others }) {
  return <StyledButton {...others}>{children}</StyledButton>;
}

export { Button as default, StyledButton };
