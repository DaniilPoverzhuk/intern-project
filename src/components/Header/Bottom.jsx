import React, { useState } from "react";

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import Activity from "../../assets/Header/Bottom/activity.svg";
import Arrow from "../../assets/Header/Top/arrow-back.svg";

import { NavLeft, NavRight } from "../../assets/constants";

import Container from "../Container";
import Menu from "./Menu";

const StyledBottom = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 370px) {
    justify-content: space-between;
  }
`;

const Page = styled.div`
  display: none;
  align-items: center;
  gap: 5px;

  @media (max-width: 530px) {
    padding: 20px 0;
  }

  @media (max-width: 370px) {
    display: flex;
  }
`;

const ArrowBack = styled.img`
  margin-top: -4px;
`;

const Text = styled.p`
  font-weight: ${(props) => props.font};
  font-size: 18px;
  line-height: 21px;
  color: #505050;
`;

const NavigationLeft = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 370px) {
    display: none;
  }
`;

const NavigationRight = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 730px) {
    display: none;
  }
`;

const Burger = styled.img`
  display: none;
  cursor: pointer;

  padding: 10px 0px;

  @media (max-width: 730px) {
    display: block;
  }
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
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const showMenu = (event) => {
    event.stopPropagation();
    setIsVisibleMenu(true);
  };

  return (
    <StyledBottom>
      <Container>
        <Wrapper>
          <NavigationLeft>
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
          </NavigationLeft>
          <NavigationRight>
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
          </NavigationRight>
          <Page>
            <ArrowBack src={Arrow} />
            <Text font={500}>User Pages</Text> - <Text>Profile</Text>
          </Page>
          <Burger src={Activity} onClick={(event) => showMenu(event)} />
          {isVisibleMenu && (
            <Menu
              setIsVisibleMenu={setIsVisibleMenu}
              setActiveLink={setActiveLink}
              activeLink={activeLink}
            />
          )}
        </Wrapper>
      </Container>
    </StyledBottom>
  );
};

export default Bottom;
