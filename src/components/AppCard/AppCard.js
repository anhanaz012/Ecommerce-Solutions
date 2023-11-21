import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LiaSlidersHSolid } from "react-icons/lia";
import styled from "styled-components";
import { COLORS, FONTS } from "../../theme";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
const Card = styled.div`
  width: 20%;
  height: 380px;
  background-color: #fbfbfa;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  @media (max-width: 370px) {
    width: 85%;
  }
  @media (min-width: 371px) and (max-width: 480px) {
    width: 75%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 35%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 35%;
  }
`;

const Image = styled.img`
  width: 90%;
  height: 135px;
  border-radius: 10px;
  @media (max-width: 480px) {
  }
`;
const ImgCont = styled.div`
  height: 155px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentCont = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const ItemName = styled.h3`
color: black;
font-family: ${FONTS.julius};
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin-bottom: 5px;
position: relative;
&:hover {
  overflow: auto;
  white-space: normal;
`;
const ItemDescription = styled.p`
  color: grey;
  font-family: ${FONTS.default};
  font-size: 12px;
`;
const AddCartButton = styled.button`
  height: 35px;
  width: 45%;
  border-radius: 5px;
  display: flex;
  margin: 10px;
  justify-content: center;
  font-family: ${FONTS.archivo};
  border: none;
  color: white;
  align-items: center;
  background-color: black;
  position: absolute;
  bottom: 0;
`;
const ItemPrice = styled.p`
  color: black;
  font-family: ${FONTS.default};
`;
const DetailsCont = styled.div`
  height: 300px;
  padding: 10px;
  overflow: hidden;
`;
const ButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ArrowLeftBtn = styled.button`
  height: 35px;
  width: 35px;
  background-color: black;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
`;
const RightArrowBtn = styled.button`
  height: 35px;
  width: 35px;
  background-color: black;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }
`;

const SmDevicesPaginationCont = styled.button`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  background-color: yellow;
  border: none;
  @media (min-width: 786px) {
    display: none;
  }
`;
const SmDevicesArrowBtn = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
`;
const FilterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  font-size: 20px;
  padding: 7px;
  border-radius: 5px;
  font-family: ${FONTS.archivo};
  color: black;
  border: 1px solid lightgrey;
  // @media (min-width: 480px) {
  //   display: none;
  // }
  
`;
const AppCard = ({ data, prevPageHandler, nextFunctionHandler }) => {
  return (
    <>
      <CardContainer>
        <SmDevicesPaginationCont>
          <FilterButton>
            <LiaSlidersHSolid />
          </FilterButton>
          <SmDevicesArrowBtn>
            <FontAwesomeIcon
              onClick={prevPageHandler}
              icon={faAngleLeft}
              color={COLORS.black}
              size="lg"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              color={COLORS.black}
              size="lg"
              onClick={nextFunctionHandler}
            />
          </SmDevicesArrowBtn>
        </SmDevicesPaginationCont>
        <ArrowLeftBtn onClick={prevPageHandler}>
          <FontAwesomeIcon icon={faArrowLeft} color={COLORS.white} size="lg" />
        </ArrowLeftBtn>
        {data ? (
          data.map((item) => {
            return (
              <Card key={item.id}>
                <ImgCont>
                  <Image src={item.thumbnail}></Image>
                </ImgCont>
                <ContentCont>
                  <DetailsCont>
                    <ItemName>{item.title}</ItemName>
                    <ItemPrice>Rs. {item.price}</ItemPrice>
                    <ItemDescription>{item.description}</ItemDescription>
                  </DetailsCont>
                  <ButtonContainer>
                    <AddCartButton>Add to Cart</AddCartButton>
                  </ButtonContainer>
                </ContentCont>
              </Card>
            );
          })
        ) : (
          <></>
        )}
        <RightArrowBtn onClick={nextFunctionHandler}>
          <FontAwesomeIcon icon={faArrowRight} color={COLORS.white} size="lg" />
        </RightArrowBtn>
      </CardContainer>
    </>
  );
};

export default AppCard;
