import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 ? (
        <h1>Create Account</h1>
      ) : step === 2 ? (
        <h1>Results</h1>
      ) : null}
      {step === 1 ? (
        <Form
          name={username}
          setName={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          errorPassword={errorPassword}
          setErrorPassword={setErrorPassword}
          setStep={setStep}
        />
      ) : (
        <StepTwo
          name={username}
          email={email}
          password={password}
          setStep={setStep}
        />
      )}
    </>
  );
}

export default App;
