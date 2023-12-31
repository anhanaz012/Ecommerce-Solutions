import React from "react";
import { FONTS } from "../../theme";
import Products from "../ProductsPage/Products";
import AboutUs from "../AboutUs/AboutUs";
import { IMAGES } from "../../assets/images/index";
import styled from "styled-components";
import { LABELS } from "../../labels";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";

const MainHeading = styled.h1`
  font-size: 40px;
  font-family: ${FONTS.julius};
  text-align: center;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const HeadingContainer = styled.div`
  @media (max-width: 480px) {
    max-width: 80%;
  }
`;
const BgContainer = styled.img`
  width: 90%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const IntroPara = styled.p`
  font-size: 16px;
  font-family: ${FONTS.archivo};
  text-align: center;
  color: grey;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const IntroContainer = styled.div`
  max-width: 70%;
  @media (max-width: 480px) {
    max-width: 80%;
  }
`;
const Button = styled.button`
  margin-top: 10px;
  height: 50px;
  width: 22%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: ${FONTS.archivo};
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: black;
  }
  @media (min-width: 768px) {
    &:hover {
      background-color:red;
    }
  }
  @media (max-width: 480px) {
    width: 40%;
    height: 40px;
    font-size: 12px;
  }
`;
const HomePage = () => {
  return (
    <>
      <Container>
        <ContentContainer>
          <HeadingContainer>
            <MainHeading>{LABELS.mainHeading}</MainHeading>
          </HeadingContainer>
          <IntroContainer>
            <IntroPara>{LABELS.introPara}</IntroPara>
          </IntroContainer>
          <Button>
            {LABELS.shopNow}
            <IoIosArrowRoundForward style={{ height: "25px", width: "25px" }} />
          </Button>
        </ContentContainer>

        <ImageContainer>
          <BgContainer src={IMAGES.newImage}></BgContainer>
        </ImageContainer>
      </Container>

      <Products />
      <div style={{ height: "100px", width: "100%" }}></div>
      <AboutUs />
      <div style={{ height: "100px", width: "100%" }}></div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
