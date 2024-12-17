import HeaderSimple from "../Components/header_logo_only";
import React, { useState, useEffect } from "react";
import { FormContent } from "../Components/form_content_box"; 
import { Next } from "../Components/Next";
import { RadioGroup } from "../Components/radio_group"; 
import "../CSS/demographic.css";

const CreateBaselineActivity = (): JSX.Element => {
    const [baselineActivity, setBaselineActivity] = useState<string>(
      sessionStorage.getItem("baseline_activity") || ""
    );
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
  
    const handleBaselineChange = (value: string) => {
      setBaselineActivity(value);
      sessionStorage.setItem("baseline_activity", value);
    };
  
    useEffect(()=> {
        if (!baselineActivity){
            setIsFormValid(false);
            setError("Please select your activity level.");
        } else {
            setIsFormValid(true);
            setError("");
        }
    }, [baselineActivity]);

    const handleSubmit = () => {
        setHasAttemptedSubmit(true);
    };


 
    const baselineOptions = [
        "NOT ACTIVE", 
        "LIGHTLY ACTIVE", 
        "ACTIVE", 
        "VERY ACTIVE"
    ];

    return (
    <>
      <HeaderSimple />
      <div className="page-container">
      <main className="demographic">
        <FormContent
          title="Activity level"
          instruction="How active are you?"
          infoText="This will help us customize your experience."
        >
          <RadioGroup
            options={baselineOptions}
            value={baselineActivity}
            onChange={handleBaselineChange}
          />
          {hasAttemptedSubmit && !isFormValid && (
              <div className="error">{error}</div>
          )}
          <div className="button-group">
            <Next label="Back" to="/question4" className="btn-purple" />
            <Next
                label="Next"
                to="/createuser"
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

export default CreateBaselineActivity;
