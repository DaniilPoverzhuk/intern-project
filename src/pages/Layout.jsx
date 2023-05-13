import React from "react";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header/Header";

const Wrapper = styled.div`
  background-color: #f1f1f1;
  min-height: 100vh;
  padding-top: 140px;

  @media (max-width: 370px) {
    padding-top: 93px;
  }
`;

export default function Layout() {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}
