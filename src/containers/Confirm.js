import React from "react";
import styled from "styled-components";

const Confirm = ({ prevStep, nextStep, values }) => {
  const InfoData = [
    ["First Name", values.firstName],
    ["Last Name", values.lastName],
    ["Email", values.email],
    ["Occupation", values.occupation],
    ["City", values.city],
    ["Bio", values.bio],
  ];

  return (
    <ConfirmContainer>
      <InfoListContainer>
        {InfoData.map((ele) => (
          <>
            <InfoListTitle>{ele[0]}</InfoListTitle>
            <InfoListContent>{ele[1]}</InfoListContent>
          </>
        ))}
        <BtnContainer>
          <BackBtn onClick={prevStep}>Back</BackBtn>
          <ConfirmContinueBtn onClick={nextStep}>
            Confirm & Continue
          </ConfirmContinueBtn>
        </BtnContainer>
      </InfoListContainer>
    </ConfirmContainer>
  );
};

export default Confirm;

const ConfirmContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InfoListContainer = styled.ul`
  padding: 0;
  margin-top: 100px;
  width: 50%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoListTitle = styled.li`
  font-size: 1.2rem;
`;

const InfoListContent = styled.li`
  padding-bottom: 10px;
  color: darkgray;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const BackBtn = styled.button`
  margin-top: 30px;
  padding: 6px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: powderblue;
  font-size: 1.2rem;
  color: gray;
`;

const ConfirmContinueBtn = styled.button`
  margin-top: 30px;
  padding: 6px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: powderblue;
  font-size: 1.2rem;
  color: gray;
`;
