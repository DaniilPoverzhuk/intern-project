import React from "react";
import styled from "styled-components";

import Top from "./Top";
import Bottom from "./Bottom";

const StyledHeader = styled.header``;

const Header = () => {
  return (
    <StyledHeader>
      <Top />
      <Bottom />
    </StyledHeader>
  );
};

export default Header;
