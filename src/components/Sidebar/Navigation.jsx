import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Profile from "../../assets/sidebar/profile.svg";
import Balance from "../../assets/sidebar/balance.svg";
import Connections from "../../assets/sidebar/connections.svg";
import Friends from "../../assets/sidebar/friends.svg";
import Events from "../../assets/sidebar/events.svg";
import Settings from "../../assets/sidebar/settings.svg";

const NavigationTop = [
  { img: Profile, text: "Profile" },
  { img: Balance, text: "Balance" },
  { img: Connections, text: "Connections" },
  { img: Friends, text: "Friends" },
];

const NavigationBottom = [
  { img: Events, text: "Events" },
  { img: Settings, text: "Account Settings" },
];

const StyledNavigation = styled.div`
  background: #fff;
`;

const NavList = styled.ul`
  list-style-type: none;

  position: relative;

  &:not(:last-child) {
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      background: #d3d8de;
      left: 0;
      bottom: 0;
    }
  }
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;

  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const NavListImg = styled.img``;

const NavListText = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #505050;
`;

const Price = styled.span`
  position: absolute;
  right: 16px;

  font-size: 12px;
  line-height: 14px;
  color: #8f8f8f;
`;

const Notification = styled.span`
  position: absolute;
  right: 16px;
  padding: 0 5px;

  font-size: 12px;
  line-height: 16px;
  color: #fff;

  background: ${({ red, green }) => {
    if (red) {
      return "#E33939";
    }

    if (green) {
      return "#47B091";
    }
  }};
  border-radius: 8px;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <Title>Navigation</Title>
      <NavList>
        {NavigationTop.map((item, idx) => (
          <NavListItem key={idx}>
            <NavListImg src={item.img} />
            <NavListText>{item.text}</NavListText>
            {item.text === "Balance" && <Price>$ 1,430</Price>}
            {item.text === "Connections" && <Notification red>29</Notification>}
          </NavListItem>
        ))}
      </NavList>
      <NavList>
        {NavigationBottom.map((item, idx) => (
          <NavListItem key={idx}>
            <NavListImg src={item.img} />
            <NavListText>{item.text}</NavListText>
            {item.text === "Events" && <Notification green>45</Notification>}
          </NavListItem>
        ))}
      </NavList>
    </StyledNavigation>
  );
};

export default Navigation;
