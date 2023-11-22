import React from "react";
import { COLORS, FONTS } from "../../theme";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { LABELS } from "../../labels";

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.black};
  display: flex;
  height:50vh;
  justify-content: center;
`;
const LogoContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  width: 90%;
`;
const RoutesContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  height:20%;
  justify-content: center;
  align-items: center;
`;
const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 8%;
  font-size: 20px;
`;
const LogoText = styled.p`
  color: white;
  font-size: 20px;
  font-family: "Julius Sans One";
  margin-left: 20px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 18px;
  }
  @media (min-width: 1920px) {
    font-size: 40px;
  }
`;
const Route = styled.p`
  color: white;
  font-family: ${FONTS.archivo};
  cursor: pointer;
`;
const TextCont = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TermsAndConditionsContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TermsAndPrivacy = styled.p`
  color: white;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <LogoContainer>
          <LogoText>{LABELS.title}</LogoText>
          <IconsContainer>
            <FontAwesomeIcon icon={faFacebook} color="white" cursor={'pointer'} />
            <FontAwesomeIcon icon={faTwitter} color="white" cursor={'pointer'}/>
            <FontAwesomeIcon icon={faInstagram} color="white" cursor={'pointer'}/>
          </IconsContainer>
        </LogoContainer>
        <RoutesContainer>
          <TextCont>
            <Route>Home</Route>
            <Route>About Us</Route>
            <Route>Services</Route>
            <Route>Contact Us</Route>
          </TextCont>
        </RoutesContainer>
        <LinksContainer>
          <TermsAndConditionsContainer>
            <TermsAndPrivacy>{LABELS.privacyPolicy}</TermsAndPrivacy>
            <TermsAndPrivacy>{LABELS.termsOfService}</TermsAndPrivacy>
            <TermsAndPrivacy>{LABELS.cookiesSetting}</TermsAndPrivacy>
          </TermsAndConditionsContainer>
        </LinksContainer>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
