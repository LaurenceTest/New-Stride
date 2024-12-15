import HeaderSimple from "../Components/header_logo_only";
import { FormContent } from "../Components/form_content_box";
import { InputField } from "../Components/input_field";
import { Next } from "../Components/Next";
import "../CSS/demographic.css";
import React, { useState, useEffect } from "react";

const Demographic2 = (): JSX.Element => {
  const [height, setHeight] = useState<string>(sessionStorage.getItem("height") || "");
  const [weight, setWeight] = useState<string>(sessionStorage.getItem("weight") || "");
  const [goalWeight, setGoalWeight] = useState<string>(sessionStorage.getItem("goalWeight") || "");
  const [isFormValid, setIsFormValid] = useState<boolean>(false); 
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false); 
  const [error, setError] = useState<string>("");
  
  const [heightError, setHeightError] = useState<string | null>(null);
  const [weightError, setWeightError] = useState<string | null>(null);
  const [goalWeightError, setGoalWeightError] = useState<string | null>(null);


  useEffect(() => {
    if (!height || !weight || !goalWeight) {
        setIsFormValid(false);
        setError("Please fill out all required fields.");
      } else {
        setIsFormValid(true);
        setError("");
      }
  }, [height, weight, goalWeight]); 

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = e.target.value;
    if (parseFloat(newHeight) > 0) {
      setHeight(newHeight);
      sessionStorage.setItem("height", newHeight);
      setHeightError(null); 
    } else {
      setHeightError("Height must be a positive number.");
    }
  };

  
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = e.target.value;
    if (parseFloat(newWeight) > 0) {
      setWeight(newWeight);
      sessionStorage.setItem("weight", newWeight);
      setWeightError(null); 
    } else {
      setWeightError("Weight must be a positive number.");
    }
  };


  const handleGoalWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGoalWeight = e.target.value;
    
    if (newGoalWeight.trim() === "") {  
      setGoalWeight("");
      setGoalWeightError("Goal weight cannot be empty.");
      sessionStorage.removeItem("weight_goal"); 
    } else if (parseFloat(newGoalWeight) > 0) {
      setGoalWeight(newGoalWeight);
      sessionStorage.setItem("weight_goal", newGoalWeight); 
      setGoalWeightError(null);
    } else {
      setGoalWeightError("Goal weight must be a positive number.");
      sessionStorage.removeItem("weight_goal"); 
    }
  };
  

  const handleSubmit = () => {
    setHasAttemptedSubmit(true);
  };

  return (
    <>
      <HeaderSimple />
      <div className="page-container">
        <main className="demographic">
          <FormContent title="" instruction="" infoText="">
            <InputField
              label="Enter your height (cm)"
              placeholder="Height in centimeters"
              type="number"
              value={height}
              onChange={handleHeightChange} 
            />
            {heightError && <p className="error">{heightError}</p>} 

            <InputField
              label="Enter your weight (kg)"
              placeholder="Weight in kilograms"
              type="number"
              value={weight}
              onChange={handleWeightChange}
            />
            {weightError && <p className="error">{weightError}</p>}

            <InputField
              label="What's your goal weight?"
              placeholder="Weight in kilograms"
              type="number"
              value={goalWeight}
              onChange={handleGoalWeightChange} 
            />
            {goalWeightError && <p className="error">{goalWeightError}</p>} 
            {hasAttemptedSubmit && !isFormValid && <div className="error">{error}</div>}
            <br />
            <div className="button-group">
              <Next label="Back" to="/question2" className="btn-purple" />
              <Next
                label="Next"
                to="/question4"
                className="btn-purple"
                disabled={!isFormValid}
                onClick={handleSubmit}
              />
            </div>
          </FormContent>
        </main>
      </div>
    </>
  );
};
export default Demographic2;