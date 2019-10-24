import React from "react";
import styled, { css } from "styled-components";
import Box from "./Box";

const StyledFlexbox = styled(Box)`
  display: flex;

  ${props =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}

  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}

  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

  ${props =>
    props.flexBasis &&
    css`
      flex-basis: ${props.flexBasis};
    `}
`;

function Flexbox({ children, ...others }) {
  return <StyledFlexbox {...others}>{children}</StyledFlexbox>;
}

export { Flexbox as default, StyledFlexbox };
