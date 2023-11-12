import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 20%;
  height: auto;
  background-color: #fbfbfa;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin: 20px;
  border-radius: 10px;
  @media (max-width: 480px) {
    width: 45%;
    margin: 0;
  }
`;

const Image = styled.img`
  width: 90%;
  height: 135px;
  border-radius: 10px;
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
  color: green;
  font-family: ${FONTS.default};
`;
const ItemDescription = styled.p`
  color: grey;
  font-family: ${FONTS.default};
  font-size: 12px;
  height: ${(props) => (props.expanded ? "auto" : "36px")};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? "initial" : "3")};
  -webkit-box-orient: vertical;
`;
const AddCartButton = styled.button`
  height: 35px;
  width: 45%;
  border-radius: 5px;
  display: flex;
  margin: 10px;
  justify-content: center;
  font-family: ${FONTS.default};
  border: none;
  color: white;
  align-items: center;
  background-color: green;
`;
const ItemPrice = styled.p`
  color: green;
  font-family: ${FONTS.default};
`;
const DetailsCont = styled.div`
  height: auto;
  padding: 10px;
`;
const ButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ReadMoreButton = styled.button`
  font-family: ${FONTS.default};
  background: none;
  border: none;
  color: green;
  cursor: pointer;
`;
const Text = styled.h1`
  color: green;
  font-family: ${FONTS.default};
  text-align: center;
`;
const ArrowBtn = styled.button`
  height: 35px;
  width: 35px;
  background-color: green;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const AppCard = ( {data, prevPageHandler,nextFunctionHandler}) => {
  const [expandedCards, setExpandedCards] = useState([]);
  const handleExpandToggle = (cardId) => {
    if (expandedCards.includes(cardId)) {
      setExpandedCards(expandedCards.filter((id) => id !== cardId));
    } else {
      setExpandedCards([...expandedCards, cardId]);
    }
  };
  

    return (
    <>
      <Text>Featured Products</Text>
      <CardContainer>
        <ArrowBtn onClick={prevPageHandler}>
          <FontAwesomeIcon icon={faArrowLeft} color={COLORS.white} size="lg" />
        </ArrowBtn>
        {data ? (
          data.map((item) => {
            const isExpanded = expandedCards.includes(item.id);

            return (
              <Card key={item.id}>
                <ImgCont>
                  <Image src={item.thumbnail}></Image>
                </ImgCont>
                <ContentCont>
                  <DetailsCont>
                    <ItemName>{item.title}</ItemName>
                    <ItemPrice>Rs. {item.price}</ItemPrice>
                    <ItemDescription expanded={isExpanded}>
                      {item.description}
                    </ItemDescription>
                    {!isExpanded && (
                      <ReadMoreButton
                        onClick={() => handleExpandToggle(item.id)}
                      >
                        Read More
                      </ReadMoreButton>
                    )}
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
        <ArrowBtn onClick={nextFunctionHandler}>
          <FontAwesomeIcon icon={faArrowRight} color={COLORS.white} size="lg" />
        </ArrowBtn>
      </CardContainer>
    </>
  );
};

export default AppCard;
