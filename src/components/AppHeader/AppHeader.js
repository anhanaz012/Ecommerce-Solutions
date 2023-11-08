import { faArrowUpFromGroundWater, faBaby, faBars, faBarsProgress, faHSquare, faHamsa } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 65px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  flex-direction: row;
  @media (max-width: 480px) {
    height: auto;
  }
`;
const LeftContainer = styled.div`
  width: 60%;
  justify-content: flex-start;
  @media (max-width: 480px) {
    justify-content: flex-start;
    display: flex;
    align-items: center;
  }
`;

const RightContainer = styled.div`
  width: 40%;
  display: flex;
 
`;
const LogoText = styled.p`
  color: green;
  font-size: 1.2em;
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
  justify-content: space-between;
  width: 100%;
  @media (max-width: 480px) {
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }
  
`;
const NavLink = styled(Link)`
  color: green;
  text-decoration: none;
  font-weight: 400;
  margin: 20px;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Button = styled.button`
  background-color: green;
  color: white;
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
margin-right:20px;
  @media (min-width: 481px) {
    display: none;
  }
`;
const AppHeader = () => {
  return (
    <>
      <Container>
        <LeftContainer >
          <LogoText>E-commerce Solutions</LogoText>
        </LeftContainer>
        <RightContainer>
          <LinkContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/AboutUs">AboutUs</NavLink>
            <NavLink to="/ContactUs">ContactUs</NavLink>
            <NavLink to="/Products">Products</NavLink>
            <Button>Login</Button>
            <MenuIcon>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </MenuIcon>
          </LinkContainer>
         
        </RightContainer>
      </Container>
      <ExtendedNavbar></ExtendedNavbar>
    </>
  );
};

export default AppHeader;
