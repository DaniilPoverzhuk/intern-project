import React from "react";
import styled from "styled-components";

import AvatarSrc from "../../assets/sidebar/avatar.svg";
import TelegramSrc from "../../assets/sidebar/telegram.svg";
import HhSrc from "../../assets/sidebar/hh.svg";
import TwitterSrc from "../../assets/sidebar/twitter.svg";

const SocialsMediaArray = [TelegramSrc, HhSrc, TwitterSrc];

const StyledProfile = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 32px 66px;
`;

const Avatar = styled.img``;

const AboutAuthor = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Name = styled.h3`
  font-size: 18px;
  line-height: 21px;
  color: #505050;
`;

const Major = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #8f8f8f;
`;

const SocialsMedia = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  list-style-type: none;
`;

const SocialsMediaItem = styled.li``;

const SocialsMediaImage = styled.img``;

const Profile = () => {
  return (
    <StyledProfile>
      <Avatar src={AvatarSrc} />
      <AboutAuthor>
        <Name>Hanna Dorman</Name>
        <Major>UX/UI designer</Major>
      </AboutAuthor>
      <SocialsMedia>
        {SocialsMediaArray.map((item, idx) => (
          <SocialsMediaItem key={idx}>
            <SocialsMediaImage src={item} />
          </SocialsMediaItem>
        ))}
      </SocialsMedia>
    </StyledProfile>
  );
};

export default Profile;
