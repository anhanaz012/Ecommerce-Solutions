import React from "react";
import { GiCheckMark } from "react-icons/gi";
import styled from "styled-components";
import { IMAGES } from "../../assets/images";
import { LABELS } from "../../labels";
import { FONTS } from "../../theme";
import Testimonial from "../../components/Testimonial/Testimonial";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 350px;
  @media (max-width: 480px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 80%;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  @media (max-width: 480px) {
    width: 90%;
    height: 100%;
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
    height: 45vh;
  }
`;
const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Heading = styled.h1`
  font-family: ${FONTS.julius};
  margin-top: -0.5%;
  @media (max-width: 480px) {
    font-size: 25px;
    margin-top: 20px;
  }
`;
const AboutUsPara = styled.p`
  font-size: 20px;
  color: grey;
  font-weight: lighter;
  @media (max-width: 480px) {
    font-size: 15px;
    font-weight: normal;
  }
`;
const Text = styled.p`
  font-size: 20px;
  color: grey;
  margin-left: 5%;
  font-weight: lighter;

  @media (max-width: 480px) {
    font-size: 15px;
    font-weight: normal;
  }
`;
const TextContainer = styled.div`
  max-width: 89%;
  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }
`;
const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const Bullet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FeaturesSubContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const AboutUs = () => {
  return (
    <>
    <Container>
      <ImageContainer>
        <Image src={IMAGES.webpFile} />
      </ImageContainer>
      <ContentContainer>
        <TextContainer>
          <Heading>Why Trust Us?</Heading>
          <AboutUsPara>{LABELS.aboutUsPara}</AboutUsPara>
          <FeaturesContainer>
            <FeaturesSubContainer>
              <Bullet>
                <GiCheckMark />
                <Text>{LABELS.qualityAssurance}</Text>
              </Bullet>
              <Bullet>
                <GiCheckMark />
                <Text>{LABELS.affordability}</Text>
              </Bullet>
            </FeaturesSubContainer>
            <FeaturesSubContainer>
              <Bullet>
                <GiCheckMark />
                <Text>{LABELS.tailoredShoppingExperience}</Text>
              </Bullet>
              <Bullet>
                <GiCheckMark />
                <Text>{LABELS.quickShipping}</Text>
              </Bullet>
            </FeaturesSubContainer>
          </FeaturesContainer>
        </TextContainer>
      </ContentContainer>
    </Container>
    <Testimonial/>
    </>
  );
};

export default AboutUs;
