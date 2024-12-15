import HeaderSimple from "../Components/header_logo_only";
import { FormContent } from "../Components/form_content_box";
import { InputField } from "../Components/input_field";
import { Next } from "../Components/Next";
import "../CSS/demographic.css";
import React, { useState, useEffect } from "react";

const InputName = (): JSX.Element => {
  const [name, setName] = useState(() => sessionStorage.getItem("name") || "");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false);  
  const [error, setError] = useState<string>("");

  useEffect(() => {
          if (!name) {
            setIsFormValid(false);
            setError("Please fill out the required field.");
          } else {
            setIsFormValid(true);
            setError("");
          }
  }, [name]); 

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newName = e.target.value;
    setName(newName);
    sessionStorage.setItem("username", newName);
  }

  const handleSubmit = () => {
    setHasAttemptedSubmit(true);
  };

  return (
    <><><HeaderSimple></HeaderSimple></>
    <div className="page-container">
    <main className="demographic">

       <FormContent 
        title="Create a username"
        infoText="We're glad you're here. Let's get to know you a little. What do we call you?">
        <div> 
        <InputField
          placeholder="Enter your username"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        {hasAttemptedSubmit && !isFormValid && <div className="error">{error}</div>}
        <br></br>
        </div>
        <div className="button-group">
            <Next label= "Back" to= "/welcome" className= "btn-purple" />
            <Next label= "Next" to= "/question2" className= "btn-purple" disabled={!isFormValid}  onClick={handleSubmit}/>
        </div>

      </FormContent>
    </main></div></>
  );
};

export default InputName;
