import React, { useState } from "react";

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

  const nextStep = () => {
    setFirstInfo({ ...firstInfo, step: step + 1 });
  };

  console.log(firstInfo);
  return <button onClick={nextStep}></button>;
};

export default UserForm;
