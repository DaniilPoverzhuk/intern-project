import React from "react";
import styled from "styled-components";

import ArrowIconSrc from "../../assets/sidebar/arrow-open.svg";

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 10px 16px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #505050;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #d3d8de;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const ArrowIcon = styled.img`
  cursor: pointer;
`;

const Title = ({ children }) => {
  return (
    <StyledTitle>
      {children}
      <ArrowIcon src={ArrowIconSrc} />
    </StyledTitle>
  );
};

export default Title;
