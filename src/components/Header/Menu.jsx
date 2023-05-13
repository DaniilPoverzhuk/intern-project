import React, { useEffect } from "react";

import styled from "styled-components";
import { GrClose } from "react-icons/gr";

import { NavLeft, NavRight, NavigationItems } from "../../assets/constants";
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
  position: absolute;
  z-index: 100;
  right: 10px;
  top: 0;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);

  width: 200px;

  background-color: #fff;
  padding: 20px 0;
  border-radius: 10px;

  @media (max-width: 370px) {
    top: 10px;
  }
`;

const Wrapper = styled.div``;

const Close = styled(GrClose)`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 14px;
`;

const ListFirst = styled.ul`
  list-style: none;
  margin-top: 20px;

  color: rgb(80, 80, 80);
`;

const ListThird = styled.ul`
  list-style: none;
  margin-top: 10px;
  display: none;

  @media (max-width: 370px) {
    display: block;
  }
`;

const ListSecond = styled.ul`
  list-style: none;
  margin-top: 10px;
  display: none;

  color: rgb(80, 80, 80);

  @media (max-width: 530px) {
    display: block;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 20px;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: rgb(241, 241, 241);
  }
`;

const ListItemPages = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 20px;

  text-decoration: none;
  color: rgb(80, 80, 80);
  background-color: ${({ active }) => active && "rgb(241, 241, 241)"};

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: rgb(241, 241, 241);
  }
`;

const Image = styled.img``;

const Menu = ({ setIsVisibleMenu, setActiveLink, activeLink }) => {
  const closeMenu = () => {
    setIsVisibleMenu(false);
  };

  const clickListItem = (idx) => {
    setActiveLink(idx);
    setIsVisibleMenu(false);
  };

  useEffect(() => {
    document.addEventListener("click", () => setIsVisibleMenu(false));

    return () => {
      document.removeEventListener("click", () => setIsVisibleMenu(false));
    };
  }, []);

  return (
    <StyledMenu onClick={(event) => event.stopPropagation()}>
      <Wrapper>
        <Close onClick={closeMenu} />
        <ListFirst>
          {NavRight.map((item, idx) => (
            <ListItem key={item.label}>
              <Image src={item.img} />
              {NavRight.length - 1 === idx ? (
                <Image src={item.label} />
              ) : (
                item.label
              )}
            </ListItem>
          ))}
        </ListFirst>
        <ListSecond>
          {NavigationItems.map((item, idx) => (
            <ListItem key={idx}>
              <Image src={item.img} />
              {item.label}
            </ListItem>
          ))}
        </ListSecond>
        <ListThird>
          {NavLeft.map((item, idx) => (
            <ListItemPages
              active={activeLink === idx}
              onClick={() => clickListItem(idx)}
              to={item.label.toLocaleLowerCase()}
              key={item.label}
            >
              <Image src={item.img} />
              {item.label}
            </ListItemPages>
          ))}
        </ListThird>
      </Wrapper>
    </StyledMenu>
  );
};

export default Menu;
