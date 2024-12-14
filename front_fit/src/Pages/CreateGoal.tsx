import HeaderSimple from "../Components/header_logo_only";
import React, { useState } from "react";
import { FormContent } from "../Components/form_content_box"; 
import { Next } from "../Components/Next";
import { RadioGroup } from "../Components/radio_group"; 
import "../CSS/demographic.css";

const CreateGoal = (): JSX.Element => {
  const [goal, setGoal] = useState("");

  const handleGoalChange = (value: string) => {
    setGoal(value);
  };

  const goalOptions = ["Lose Weight", "Gain Weight", "Gain Muscle"];
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
          <div className="button-group">
            <Next label="Back" to="/question3" className="btn-purple" />
            <Next label="Next" to="/question5" className="btn-purple" />
          </div>
        </FormContent>
      </main></div>
    </>
  );
};

export default CreateGoal;
