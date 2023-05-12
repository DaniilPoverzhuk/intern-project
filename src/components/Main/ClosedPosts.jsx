import React from "react";
import styled from "styled-components";

const StyledClosedPosts = styled.div`
  padding: 18px 32px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  line-height: 19px;
  color: #505050;
`;

const Title = styled.div``;

const DataPosted = styled.div`
  display: flex;
  align-items: center;
`;

const TimeIcon = styled.img``;

const Data = styled.span`
  padding: 0 16px 0 8px;
`;

const ArrowDownIcon = styled.img`
  cursor: pointer;
`;

const ClosedPosts = ({ title, TimeIconSrc, time, ArrowDownSrc }) => {
  return (
    <StyledClosedPosts>
      <Title>{title}</Title>
      <DataPosted>
        <TimeIcon src={TimeIconSrc} />
        <Data>{time}</Data>
        <ArrowDownIcon src={ArrowDownSrc} />
      </DataPosted>
    </StyledClosedPosts>
  );
};

export default ClosedPosts;
