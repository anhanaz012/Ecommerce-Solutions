import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../../theme";
import { CustomerReviews } from "../../data/appData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const TestimonialCard = styled.div`
  height: 180px;
  width: 30%;
  background-color: ${COLORS.gray};
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReviewContainer = styled.div`
  max-width: 80%;
`;
const CustomerReview = styled.p`
  font-family: ${FONTS.archivo};
`;
const CustomerName = styled.p`
  font-family: ${FONTS.archivo};
  font-weight: bold;
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
const Testimonial = () => {
  return (
    <TestimonialContainer>
      <ArrowLeftBtn>
        <FontAwesomeIcon icon={faArrowLeft} color={COLORS.white} size="lg" />
      </ArrowLeftBtn>
      {CustomerReviews ? (
        CustomerReviews.map((item) => {
          return (
            <TestimonialCard>
              <ReviewContainer>
                <CustomerReview>{item.review}</CustomerReview>
                <CustomerName>{item.name}</CustomerName>
              </ReviewContainer>
            </TestimonialCard>
          );
        })
      ) : (
        <></>
      )}
      <RightArrowBtn>
        <FontAwesomeIcon icon={faArrowRight} color={COLORS.white} size="lg" />
      </RightArrowBtn>
    </TestimonialContainer>
  );
};

export default Testimonial;
