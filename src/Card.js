import React from "react";
import styled, { css } from "styled-components";
import Flexbox from "./Flexbox";

const StyledCard = styled(Flexbox)`
  & img {
    border-radius: 50%;
  }
`;

const Card = ({ children, ...others }) => {
  return <StyledCard {...others}>{children}</StyledCard>;
};

export { Card as default, StyledCard };
