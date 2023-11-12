import React from "react";
import styled from "styled-components";
import { FONTS } from "../../theme";

const Pagination = ({
  totalPages,
  onClick,
  currentPage,
}) => {
  const pagesCount = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesCount.push(i);
  }
  const getValue = (item) => {
    onClick(item);
  };
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
${(props) =>
  props.currentPage === currentPage
    ? `border:1px solid green 
    ;height:30px;
    width:50px;
     color:green ;
     cursor:pointer;
     font-weight:bold;
      border-radius:3px ;`
    : `background-color:white`};
`;
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    width: 20%;
    margin: auto;
    
  `;
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
              currentPage={item}
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
