import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.palette.primary};
      color: white;
    `}

  ${props =>
    props.secondary &&
    css`
      border: 2px solid palevioletred;
      color: palevioletred;
    `}
`;

function Button({ children, ...others }) {
  return <StyledButton {...others}>{children}</StyledButton>;
}

export { Button as default, StyledButton };
