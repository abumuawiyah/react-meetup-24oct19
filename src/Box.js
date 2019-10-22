import React from "react";
import styled, { css } from "styled-components";

const StyledBox = styled.div`
  ${props =>
    props.w &&
    css`
      width: ${props.w};
    `}

  ${props =>
    props.h &&
    css`
      height: ${props.h};
    `}

  ${props =>
    props.p &&
    css`
      padding: ${props.p};
    `}

  ${props =>
    props.m &&
    css`
      margin: ${props.m};
    `}
`;

function Box({ children, ...others }) {
  return <StyledBox {...others}>{children}</StyledBox>;
}

export { Box as default, StyledBox };
