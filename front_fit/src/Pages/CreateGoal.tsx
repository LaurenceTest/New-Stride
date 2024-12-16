import HeaderSimple from "../Components/header_logo_only";
import React, { useState, useEffect } from "react";
import { FormContent } from "../Components/form_content_box"; 
import { Next } from "../Components/Next";
import { RadioGroup } from "../Components/radio_group"; 
import "../CSS/demographic.css";

const CreateGoal = (): JSX.Element => {
    const [goal, setGoal] = useState<string>(sessionStorage.getItem("goal") || "");
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    
    const handleGoalChange = (value: string) => {
        setGoal(value);
        sessionStorage.setItem("main_goal", value);
    };
    
    useEffect(() => {
        if (!goal) {
            setIsFormValid(false);
            setError("Please select your goal.");
        } else {
            setIsFormValid(true);
            setError("");
        }
    }, [goal]);
    const handleSubmit = () => {
        setHasAttemptedSubmit(true);
    };
    
    const goalOptions = [
        "LOSE WEIGHT", 
        "MAINTAIN WEIGHT", 
        "GAIN MUSCLE"
    ];

  return (
    <>
      <HeaderSimple />
      <div className="page-container">
      <main className="demographic">
        <FormContent
          title="Choose your goal"
          instruction=""
          infoText="This will help us customize your experience."
        >
            <RadioGroup
                options={goalOptions}
                value={goal}
                onChange={handleGoalChange}
            />
            {hasAttemptedSubmit && !isFormValid && (
                <div className="error">{error}</div>
            )}
            <div className="button-group">
            <Next label="Back" to="/question3" className="btn-purple" />
            <Next
                label="Next"
                to="/question5"
                className="btn-purple"
                disabled={!isFormValid}
                onClick={handleSubmit}
              />
            </div>
        </FormContent>
      </main></div>
    </>
  );
};

export default CreateGoal;
