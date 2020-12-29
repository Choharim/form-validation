import React, { useState } from "react";
import FormUserDetails from "../containers/FormUserDetails";

const UserForm = () => {
  const [firstInfo, setFirstInfo] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });
  const { step, firstName, lastName, email, occupation, city, bio } = firstInfo;
  const values = { firstName, lastName, email, occupation, city, bio };

  const nextStep = () => {
    setFirstInfo({ ...firstInfo, step: step + 1 });
  };
  const prevStep = () => {
    setFirstInfo({ ...firstInfo, step: step - 1 });
  };
  const changeInfo = (input) => (e) => {
    setFirstInfo({ ...firstInfo, input: e.target.value });
  };

  console.log(firstInfo);

  return (
    <>
      {step === 1 && (
        <FormUserDetails
          nextStep={nextStep}
          changeInfo={changeInfo}
          values={values}
        ></FormUserDetails>
      )}
      {step === 2 && <h1>FormPersonalDetails</h1>}
      {step === 3 && <h1>Confirm</h1>}
      {step === 4 && <h1>Success</h1>}
    </>
  );
};

export default UserForm;
