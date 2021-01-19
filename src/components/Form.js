import React from "react";

const Form = ({
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setErrorPassword,
  errorPassword,
  name,
  email,
  password,
  confirmPassword,
  setStep,
}) => {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (password !== confirmPassword) {
            setErrorPassword("Les mots de passe ne sont pas identiques");
          } else {
            setStep(2);
          }
        }}
      >
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className={errorPassword && "error"}
          placeholder="Your password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          className={errorPassword && "error"}
          placeholder="Confirm your password"
          type="password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <p className="error-message">{errorPassword}</p>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Form;
