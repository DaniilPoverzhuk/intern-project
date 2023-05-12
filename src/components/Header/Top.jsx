import React from "react";
import styled from "styled-components";

import Arrow from "../../assets/Header/Top/arrow-back.svg";
import Statistics from "../../assets/Header/Top/statistics.svg";
import Invoice from "../../assets/Header/Top/invoice.svg";
import Schedule from "../../assets/Header/Top/schedule.svg";

import Container from "../Container";

const StyledTop = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 8px;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Image = styled.img``;

const Label = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #505050;
`;

const NavigationItems = [
  { img: Statistics, label: "Statistics" },
  { img: Invoice, label: "Invoices" },
  { img: Schedule, label: "Schedule" },
];

const Top = () => {
  return (
    <StyledTop>
      <Container>
        <Wrapper>
          <Page>
            <ArrowBack src={Arrow} />
            <Text font={500}>User Pages</Text> - <Text>Profile</Text>
          </Page>
          <Navigation>
            {NavigationItems.map((item, idx) => (
              <NavigationItem key={idx}>
                <Image src={item.img} />
                <Label>{item.label}</Label>
              </NavigationItem>
            ))}
          </Navigation>
        </Wrapper>
      </Container>
    </StyledTop>
  );
};

export default Top;
