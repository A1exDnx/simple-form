import React from "react";

const StepTwo = ({ name, email, password, setStep }) => {
  return (
    <>
      <div>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button onClick={() => setStep(1)}>Edit your informations</button>
    </>
  );
};

export default StepTwo;
