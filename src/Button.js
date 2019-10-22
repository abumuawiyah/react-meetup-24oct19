import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: rebeccapurple;
`;

function Button({ children, ...others }) {
  return <StyledButton {...others}>{children}</StyledButton>;
}

export { Button as default, StyledButton };
