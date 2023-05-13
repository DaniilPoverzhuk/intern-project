import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1376px;
  margin: 0 auto;

  @media (max-width: 1375px) {
    margin: 0 20px;
  }
`;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
