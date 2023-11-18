import React from "react";
import styled from "styled-components";
import { FONTS } from "../../theme";

const Buttons = styled.button`
height:30px;
width:40px;
background-color:white;
color:grey;
border:none;
align-items:center;
font-family:${FONTS.default}
border-radius:5px;
cursor:pointer;
margin:5px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  width: 20%;
  border-radius: 5px;
  margin: auto;
`;
const Pagination = ({ totalPages, onClick }) => {
  const pagesCount = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesCount.push(i);
  }
  const getValue = (item) => {
    onClick(item);
  };
  return (
    <>
      <ButtonContainer>
        {pagesCount.map((item) => {
          return (
            <Buttons
              key={item}
              onClick={() => {
                getValue(item);
              }}
            >
              {item}
            </Buttons>
          );
        })}
      </ButtonContainer>
    </>
  );
};

export default Pagination;
