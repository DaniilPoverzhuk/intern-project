import React from "react";
import styled from "styled-components";

import ArrowDownSrc from "../assets/Title/arrow-down.svg";
import ReloadSrc from "../assets/Title/reload.svg";
import CloseSrc from "../assets/Title/close.svg";

const InteractionsArray = [ArrowDownSrc, ReloadSrc, CloseSrc];

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NamePage = styled.h3`
  font-size: 16px;
  line-height: 19px;
  color: #505050;
  font-weight: 400;
`;

const Interactions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InteractionsItem = styled.img`
  cursor: pointer;
`;

const Title = ({ title, ...props }) => {
  return (
    <StyledTitle {...props}>
      <NamePage>{title}</NamePage>
      <Interactions>
        {InteractionsArray.map((item, idx) => (
          <InteractionsItem key={idx} src={item} />
        ))}
      </Interactions>
    </StyledTitle>
  );
};

export default Title;
