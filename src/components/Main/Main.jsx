import React from "react";
import styled from "styled-components";

import ClosedPosts from "./ClosedPosts";

import PostImg from "../../assets/Main/home-bg.png";
import CommentImageSrc from "../../assets/Main/comment.svg";
import ViewSrc from "../../assets/Main/views.svg";
import AmountCommentsSrc from "../../assets/Main/comment.svg";
import TimeIconSrc from "../../assets/Main/time.svg";
import ArrowDownSrc from "../../assets/Main/arrow-down.svg";

const closedPosts = [
  {
    title: "Sunset Sunset Sunset",
    TimeIconSrc,
    time: "53 minutes ago",
    ArrowDownSrc,
  },
  {
    title: "Morning of Siberia",
    TimeIconSrc,
    time: "56 minutes ago",
    ArrowDownSrc,
  },
];

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 3;
`;

const Post = styled.div`
  background-color: #fff;
  padding: 56px 32px 32px;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  margin-top: 10px;

  font-size: 14px;
  line-height: 16px;

  @media (max-width: 342px) {
    font-size: 12px;
  }
`;

const Name = styled.span`
  padding: 0 8px;
  color: #5095ec;
`;

const CommentImage = styled.img``;

const Comment = styled.div`
  padding-left: 8px;
  position: relative;
  margin-top: 15px;

  font-size: 14px;
  line-height: 16px;
  color: #505050;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #d3d8de;
    width: 2px;
    height: 100%;
  }

  @media (max-width: 342px) {
    font-size: 12px;
  }
`;

const CommentText = styled.p``;

const DataPosted = styled.p`
  color: #8f8f8f;
  margin-top: 16px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 18px;

  & > p {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const View = styled.p``;

const ViewIcon = styled.img``;

const AmountComments = styled.p``;

const AmountCommentsIcon = styled.img``;

const Count = styled.span``;

const Main = () => {
  return (
    <StyledMain>
      <Post>
        <Image src={PostImg}></Image>
        <Title>
          <CommentImage src={CommentImageSrc} />
          <Name>Jason Anderson </Name>
          commented:
        </Title>
        <Comment>
          <CommentText>
            Don’t sit and wait. Get out there, feel life. Touch the sun, and
            immerse in the sea. Keep love in your heart. A life without it is
            like a sunless garden when the flowers are dead. Because summer is
            passion, memories, light breeze, the sun that appears on the skin
            and caresses the face.
          </CommentText>
          <DataPosted>– Jason, 10:30 am</DataPosted>
        </Comment>
        <Info>
          <View>
            <ViewIcon src={ViewSrc} />
            <Count>432</Count>
          </View>
          <AmountComments>
            <AmountCommentsIcon src={AmountCommentsSrc} />
            <Count>47</Count>
          </AmountComments>
        </Info>
      </Post>
      {closedPosts.map((item, idx) => (
        <ClosedPosts key={idx} {...item} />
      ))}
    </StyledMain>
  );
};

export default Main;
