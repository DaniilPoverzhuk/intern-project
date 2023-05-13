import React from "react";
import styled from "styled-components";

import Main from "../components/Main/Main";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar/Sidebar";

const StyledHome = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 32px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export default React.memo(function Home() {
  return (
    <StyledHome>
      <Container>
        <Wrapper>
          <Main />
          <Sidebar />
        </Wrapper>
      </Container>
    </StyledHome>
  );
});
