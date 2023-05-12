import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Navigation from "./Navigation";
import FormComments from "./FormComments";

const StyledSidebar = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Profile />
      <Navigation />
      <FormComments />
    </StyledSidebar>
  );
};

export default Sidebar;
