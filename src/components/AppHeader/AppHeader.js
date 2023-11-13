import React from "react";
import { CiMenuBurger, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LABELS } from "../../labels/index";

const Container = styled.div`
  height: 65px;
  position: absolute;
  align-items: center;
  top: 0;
  width: 100%;
  display: flex;
  border-bottom: 1px solid lightgrey;
  background-color: transparent;
  flex-direction: row;
  @media (max-width: 480px) {
    height: auto;
  }
`;
const LeftContainer = styled.div`
  width: 50%;
  justify-content: flex-start;
  @media (max-width: 480px) {
    justify-content: flex-start;
    display: flex;
    align-items: center;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
`;
const LogoText = styled.p`
  color: black;
  font-size: 30px;
  font-family: "Julius Sans One";
  margin-left: 20px;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 480px) {
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }
`;
const NavLink = styled(Link)`
  color: black;
  font-family: Archivo Narrow;
  text-decoration: none;
  font-weight: 400;
  @media (max-width: 480px) {
    display: none;
  }
`;
const IconsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 10%;
@media (max-width: 480px) {
  display: none;
}
`
const Button = styled.button`
  background-color: white;
  color: #52ba93;
  height: 35px;
  width: 15%;
  margin-right: 20px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  @media (max-width: 480px) {
    display: none;
  }
`;
const ExtendedNavbar = styled.nav`
  background-color: green;
  width: 100%;
`;
const MenuIcon = styled.div`
  margin-right: 20px;
  @media (min-width: 481px) {
    display: none;
    font-size:20px;
  }
`;
const AppHeader = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <LogoText>{LABELS.title}</LogoText>
        </LeftContainer>
        <RightContainer>
          <LinkContainer>
            <NavLink to="/">{LABELS.home}</NavLink>
            <NavLink to="/Products">{LABELS.AllProducts}</NavLink>
            <NavLink to="/AboutUs">{LABELS.AboutUs}</NavLink>
            <NavLink to="/ContactUs">{LABELS.Contact}</NavLink>
            <IconsContainer>
            <CiShoppingCart style={{ width: 25, height: 25 }} />
            <CiUser style={{ width: 25, height: 25}}/>
            </IconsContainer>
            <MenuIcon>
             <CiMenuBurger/>
            </MenuIcon>
          </LinkContainer>
        </RightContainer>
      </Container>
    </>
  );
};

export default AppHeader;
