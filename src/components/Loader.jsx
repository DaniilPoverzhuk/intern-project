import React from "react";
import styled, { keyframes } from "styled-components";

import { AiOutlineReload } from "react-icons/ai";

const StyledLoader = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0);
  } to {
    transform: rotate(360deg);
  }
`;

const LoaderIcon = styled(AiOutlineReload)`
  font-size: 150px;
  animation: ${rotate} 3s linear infinite;

  position: absolute;
  inset: 0;
  margin: auto;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <LoaderIcon />
    </StyledLoader>
  );
};

export default Loader;
