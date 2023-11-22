import React from "react";
import styled from "styled-components";
import { LABELS } from "../../labels";
import { FONTS } from "../../theme";

const Container = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextContainer = styled.div`
  width: 100%;
  max-width: 80%;

`;
const Heading = styled.h1`
  font-family: ${FONTS.julius};
`;
const SubHeading = styled.h3`
  font-family: ${FONTS.default};
`;
const Text = styled.p`
  font-family: ${FONTS.archivo};
  margin-left: 5%;
`;
const ContactUsTextCont = styled.div`
  max-width: 70%;
  border-left: 3px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TextInput = styled.input`
  height: 45px;
  width: 80%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-size:15px;
  font-family: ${FONTS.default};
  margin-bottom: 15px;
  padding-left: 10px;
`;
const Textarea = styled.textarea`
  height: 70px;
  width: 79%;
  font-size:15px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-family: ${FONTS.default};
  padding:10px;
`;
const SubmitButton = styled.button`
  height: 45px;
  width: 20%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  font-family: ${FONTS.default};
  margin-top: 10px;
  background-color: black;
  color: white;
  font-size: 16px;
`;
const ContactUs = () => {
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Heading>{LABELS.getInTouch}</Heading>
          <SubHeading>{LABELS.contactUsSubHeading}</SubHeading>
          <ContactUsTextCont>
            <Text>{LABELS.contactUsPara}</Text>
          </ContactUsTextCont>
        </TextContainer>
      </ContentContainer>
      <FormContainer>
        <TextInput placeholder={LABELS.enterName} type="text" />
        <TextInput placeholder={LABELS.enterEmail} type="email" />
        <Textarea placeholder={LABELS.enterMessage}></Textarea>
        <div style={{width:'82%'}}>
        <SubmitButton>{LABELS.submit}</SubmitButton>
        </div>
      </FormContainer>
    </Container>
  );
};

export default ContactUs;
