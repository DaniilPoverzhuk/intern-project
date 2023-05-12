import React from "react";
import styled from "styled-components";

import Title from "../components/Title";
import Container from "../components/Container";
import { useSelector } from "react-redux";

const StyledTime = styled.div``;

const Wrapper = styled.div`
  padding: 18px 32px;
  background-color: #fff;
`;

const Timer = styled.div`
  margin-top: 16px;
`;

const Time = () => {
  const { hours, minutes, seconds } = useSelector(
    (state) => state.TimeSlice.time
  );

  return (
    <StyledTime>
      <Container>
        <Wrapper>
          <Title title="Timer" style={{ paddingBottom: "18px" }} />
          <Timer>
            {hours}:{minutes}:{seconds}
          </Timer>
        </Wrapper>
      </Container>
    </StyledTime>
  );
};

export default Time;
