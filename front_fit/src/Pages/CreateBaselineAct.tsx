import HeaderSimple from "../Components/header_logo_only";
import React, { useState } from "react";
import { FormContent } from "../Components/form_content_box"; 
import { Next } from "../Components/Next";
import { RadioGroup } from "../Components/radio_group"; 
import "../CSS/demographic.css";

const CreateBaselineActivity = (): JSX.Element => {
  const [baseline_activity, setBaseline] = useState("");

  const handleBaselineAct = (value: string) => {
    setBaseline(value);
  };

 
  const baseline_activity_option = ["Not Active", "Lightly Active", "Moderately Active", "Very Active", "Extremely Active"];
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
            options={baseline_activity_option}
            value={baseline_activity}
            onChange={handleBaselineAct}
          />
          <div className="button-group">
            <Next label="Back" to="/question4" className="btn-purple" />
            <Next label="Next" to="/createuser" className="btn-purple" />
          </div>
        </FormContent>
      </main>
      </div>
    </>
  );
};

export default CreateBaselineActivity;
