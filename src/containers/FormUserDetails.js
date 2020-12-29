import React from "react";
import styled from "styled-components";

const FormUserDetails = () => {
  return (
    <UserFormDetailsContainer>
      <UserFormDetailsForm>
        <FirstNameLabel>First Name</FirstNameLabel>
        <FirstNameInput type="text" placeholder="Enter Your FirstName" />
        <LastNameLabel>Last Name</LastNameLabel>
        <LastNameInput type="text" placeholder="Enter Your LastName" />
        <EmailLabel>Email</EmailLabel>
        <EmailInput type="email" placeholder="Enter Your Email" />
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
