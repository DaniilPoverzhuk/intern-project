import React from "react";
import styled from "styled-components";

import Title from "./Title";

const StyledFormComments = styled.form`
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 8px 16px 16px;
`;

const Textarea = styled.textarea`
  resize: none;
  border: 1px solid #d3d8de;
  border-radius: 4px;

  padding: 8px 16px;

  min-height: 90px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin-top: 8px;
  padding: 8px 20px;

  color: #fff;

  background: #5095ec;
  border-radius: 4px;
  border: none;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    outline: 1px solid #5095ec;
    background: none;
    color: #5095ec;
  }
`;

const FormComments = () => {
  return (
    <StyledFormComments onSubmit={(e) => e.preventDefault()}>
      <Title>Share your thoughts</Title>
      <Wrapper>
        <Textarea placeholder="Enter your message..." />
        <Button>Save</Button>
      </Wrapper>
    </StyledFormComments>
  );
};

export default FormComments;
