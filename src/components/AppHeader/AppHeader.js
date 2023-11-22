import React from "react";
import { CiMenuBurger, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LABELS } from "../../labels/index";
import { FONTS } from "../../theme";

const Container = styled.div`
  height: 65px;
  align-items: center;
  width: 100%;
  display: flex;
  border-bottom: 1px solid lightgrey;
  flex-direction: row;
  @media (max-width: 480px) {
    height: auto;
    font-size: 20px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    height: auto;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: auto;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: auto;
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
  }
  @media (min-width: 1920px) {
    height: auto;
  }
`;
const LeftContainer = styled.div`
  width: 60%;
  @media (max-width: 480px) {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 45%;
  }
`;

const RightContainer = styled.div`
  width: 40%;
  display: flex;
  // align-items:center;
  @media (min-width: 481px) and (max-width: 767px) {
    width: 55%;
  }
`;
const LogoText = styled.p`
  color: black;
  font-size: 30px;
  font-family: "Julius Sans One";
  margin-left: 20px;
  font-weight: 600;
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
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const NavLink = styled(Link)`
  color: black;
  font-family: Archivo Narrow;
  text-decoration: none;
  font-weight: 400;
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
  }
  @media (min-width: 1920px) {
    font-size: 28px;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 15%;
  justify-content: space-between;
  font-size: 22px;
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 20px;
  }
  @media (min-width: 1920px) {
    font-size: 35px;
  }
`;
const MenuIcon = styled.div`
  margin-left: 10px;
  @media (min-width: 481px) {
    display: none;
    font-size: 20px;
  }
`;
const Icon = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    font-size: 20px;
  }
`;
const CartCount = styled.div`
  background-color: black;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  border-radius: 13px;
`;
const IconStyle = {
  width: 25,
  height: 25,
};
const CartContainer = styled.div`
  display: flex;
  width: 50px;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const AppHeader = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <MenuIcon>
            <CiMenuBurger />
          </MenuIcon>
          <LogoText>{LABELS.title}</LogoText>
        </LeftContainer>
        <RightContainer>
          <LinkContainer>
            <NavLink to="/">{LABELS.home}</NavLink>
            <NavLink to="/Products">{LABELS.AllProducts}</NavLink>
            <NavLink to="/AboutUs">{LABELS.AboutUs}</NavLink>
            <NavLink to="/ContactUs">{LABELS.Contact}</NavLink>
            <IconsContainer>
              <CiShoppingCart />
              <div
                style={{
                  backgroundColor: "black",
                  width: "15px",
                  height: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "12px",
                  borderRadius: "13px",
                  marginLeft: "-48%",
                  fontFamily:FONTS.archivo,
                  fontWeight:'bold',
                  marginTop: "-3%",
                  fontSize: "10px",
                }}
              >
                <p>0</p>
              </div>

              <CiUser />
            </IconsContainer>
            <Icon>
              <CartContainer>
                <CiShoppingCart />
                <div
                  style={{
                    backgroundColor: "black",
                    width: "12px",
                    height: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "12px",
                    borderRadius: "13px",
                    marginLeft: "-18%",
                    marginTop: "-25%",
                    fontSize: "8px",
                    fontWeight:'bold',
                  }}
                >
                  <p>1</p>
                </div>
                {/* <CiShoppingCart style={{ marginRight: "10px" }} /> */}
                {/* <CartCount>
                  <p style={{ color: "white" }}>1</p>
                </CartCount> */}
              </CartContainer>
            </Icon>
          </LinkContainer>
        </RightContainer>
      </Container>
    </>
  );
};

export default AppHeader;
