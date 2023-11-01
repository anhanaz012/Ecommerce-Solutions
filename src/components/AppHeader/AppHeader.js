import React from "react";
import "./styles.css";
import styled from "styled-components";
import { AppText } from "../AppText/AppText";
import { LABELS } from "../../labels";
import { COLORS, FONTS } from "../../theme";
import { MyButton } from "../Button/Button";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  top: 0;
  justify-content: space-between;
`;
const RoutesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;
const LogoContainer = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
`;

const AppHeader = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <AppText
          fontSize="25px"
          fontWeight="700"
          color={COLORS.primary}
          fontFamily={FONTS.default}
        >
          {LABELS.title}
        </AppText>
      </LogoContainer>
      <RoutesContainer>
        <AppText variant="h3" color={COLORS.white} fontFamily={FONTS.default}>
          {LABELS.home}
        </AppText>
        <AppText variant="h3" color={COLORS.white} fontFamily={FONTS.default}>
          {LABELS.AllProducts}
        </AppText>
        <AppText variant="h3" color={COLORS.white} fontFamily={FONTS.default}>
          {LABELS.AboutUs}
        </AppText>
        <AppText variant="h3" color={COLORS.white} fontFamily={FONTS.default}>
          {LABELS.Contact}
        </AppText>
       <MyButton>
          {LABELS.login}
       </MyButton>
      </RoutesContainer>
    </Wrapper>
  );
};

export default AppHeader;
