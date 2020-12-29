import React from "react";
import styled from "styled-components";

const FormUserDetails = ({ nextStep, changeInfo, values }) => {
  const check = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      nextStep();
    }
    nextStep();
  };
  return (
    <UserFormDetailsContainer>
      <UserFormDetailsForm>
        <FirstNameLabel>First Name</FirstNameLabel>
        <FirstNameInput
          onChange={changeInfo("firstName")}
          defaultValue={values.firstName}
          type="text"
          placeholder="Enter Your FirstName"
        />
        <LastNameLabel>Last Name</LastNameLabel>
        <LastNameInput
          onChange={changeInfo("lastName")}
          defaultValue={values.lastName}
          type="text"
          placeholder="Enter Your LastName"
        />
        <EmailLabel>Email</EmailLabel>
        <EmailInput
          onChange={changeInfo("email")}
          defaultValue={values.email}
          type="email"
          placeholder="Enter Your Email"
        />
        <ContinueBtn onClick={check}>continue</ContinueBtn>
      </UserFormDetailsForm>
    </UserFormDetailsContainer>
  );
};

export default FormUserDetails;

const UserFormDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const UserFormDetailsForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FirstNameLabel = styled.label`
  width: 100%;
  color: darkgray;
  padding-bottom: 5px;
`;

const FirstNameInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 2px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const LastNameLabel = styled.label`
  width: 100%;
  color: darkgray;
  padding-bottom: 5px;
`;

const LastNameInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 2px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const EmailLabel = styled.label`
  width: 100%;
  color: darkgray;
  padding-bottom: 5px;
`;

const EmailInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 2px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const ContinueBtn = styled.button`
  align-self: flex-start;
  padding: 6px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: powderblue;
  font-size: 1.2rem;
  color: gray;
`;
