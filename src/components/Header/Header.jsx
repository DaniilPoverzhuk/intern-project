import React from "react";
import styled from "styled-components";

import Top from "./Top";
import Bottom from "./Bottom";

const StyledHeader = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: #fff;
`;

export default React.memo(function Header() {
  return (
    <StyledHeader>
      <Top />
      <Bottom />
    </StyledHeader>
  );
});
