import React, { useState } from "react";

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import Activity from "../../assets/Header/Bottom/activity.svg";
import Map from "../../assets/Header/Bottom/map.svg";
import Time from "../../assets/Header/Bottom/time.svg";
import Notes from "../../assets/Header/Bottom/notes.svg";
import Friends from "../../assets/Header/Bottom/friends.svg";
import Photos from "../../assets/Header/Bottom/photos.svg";
import Settings from "../../assets/Header/Bottom/settings.svg";
import ArrowDown from "../../assets/Header/Bottom/arrow-down.svg";

import Container from "../Container";

const NavLeft = [
  { img: Activity, label: "Activity" },
  { img: Map, label: "Map" },
  { img: Time, label: "Time" },
];

const NavRight = [
  { img: Notes, label: "Notes" },
  { img: Friends, label: "Friends" },
  { img: Photos, label: "Photos" },
  { img: Settings, label: ArrowDown },
];

const StyledBottom = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavigationItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;

  font-size: 14px;
  line-height: 16px;
  color: #505050;

  text-decoration: none;

  transition: 0.4s;

  &:hover {
    background-color: #f1f1f1;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #f1f1f1;
    `}
`;

const Image = styled.img``;

const Bottom = () => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <StyledBottom>
      <Container>
        <Wrapper>
          <Navigation>
            {NavLeft.map((item, idx) => (
              <NavigationItem
                active={activeLink === idx}
                onClick={() => setActiveLink(idx)}
                to={item.label.toLocaleLowerCase()}
                key={item.label}
              >
                <Image src={item.img} />
                {item.label}
              </NavigationItem>
            ))}
          </Navigation>
          <Navigation>
            {NavRight.map((item, idx) => (
              <NavigationItem key={item.label}>
                <Image src={item.img} />
                {NavRight.length - 1 === idx ? (
                  <Image src={item.label} />
                ) : (
                  item.label
                )}
              </NavigationItem>
            ))}
          </Navigation>
        </Wrapper>
      </Container>
    </StyledBottom>
  );
};

export default Bottom;
