import React from "react";
import styled from "styled-components";

const FormPersonalDetails = ({ prevStep, nextStep, changeInfo, values }) => {
  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  const check = (e) => {
    e.preventDefault();
    if (values.occupation && values.city && values.bio) {
      nextStep();
    }
  };

  return (
    <PersonalDetailsContainer>
      <PersonalDetailsForm>
        <OccupationLabel>Occupation</OccupationLabel>
        <OccupationInput
          onChange={changeInfo("occupation")}
          defaultValue={values.occupation}
          type="text"
          placeholder="Enter Your Occupation"
        />
        <CityLabel>City</CityLabel>
        <CityInput
          onChange={changeInfo("city")}
          defaultValue={values.city}
          type="text"
          placeholder="Enter Your City"
        />
        <BioLabel>Bio</BioLabel>
        <BioInput
          onChange={changeInfo("bio")}
          defaultValue={values.bio}
          type="text"
          placeholder="Enter Your Bio"
        />
        <BtnConatiner>
          <BackBtn onClick={goBack}>Back</BackBtn>
          <ContinueBtn onClick={check}>continue</ContinueBtn>
        </BtnConatiner>
      </PersonalDetailsForm>
    </PersonalDetailsContainer>
  );
};

export default FormPersonalDetails;

const PersonalDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const PersonalDetailsForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OccupationLabel = styled.label`
  width: 100%;
  color: darkgray;
  padding-bottom: 5px;
`;

const OccupationInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 2px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const CityLabel = styled.label`
  width: 100%;
  color: darkgray;
  padding-bottom: 5px;
`;

const CityInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 2px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const BioLabel = styled.label`
  width: 100%;
  color: darkgray;
  padding-bottom: 5px;
`;

const BioInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 2px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const BtnConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BackBtn = styled.button`
  padding: 6px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: powderblue;
  font-size: 1.2rem;
  color: gray;
`;

const ContinueBtn = styled.button`
  padding: 6px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: powderblue;
  font-size: 1.2rem;
  color: gray;
`;
