import React from "react";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header/Header";

const Wrapper = styled.div`
  padding-top: 32px;
  background-color: #f1f1f1;
  min-height: calc(100vh - 108px);
`;

export default React.memo(function Layout() {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
});
